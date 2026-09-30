#!/usr/bin/env python3
import base64
import json
import re
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent.parent
MUSIC_DIR = ROOT / "smoothJ"
OUTPUT = ROOT / "songs.json"

STRUDEL_BASE = "https://strudel.cc/#"

METADATA_RE = re.compile(r"^\s*//\s*@([A-Za-z0-9_-]+)\s*:\s*(.*?)\s*$")


def parse_metadata(code: str, filename: str) -> dict:
    metadata = {}

    # Metadata is intentionally read only from the beginning of the file.
    for line in code.splitlines()[:30]:
        match = METADATA_RE.match(line)
        if match:
            metadata[match.group(1).lower()] = match.group(2).strip()

    return {
        "title": metadata.get("title") or Path(filename).stem,
        "artist": metadata.get("artist", ""),
        "bpm": metadata.get("bpm", ""),
    }


def strudel_link(code: str) -> str:
    # Strudel accepts the source code encoded in the URL hash.
    encoded = base64.b64encode(code.encode("utf-8")).decode("ascii")
    return STRUDEL_BASE + quote(encoded, safe="")


def slug(filename: str) -> str:
    value = Path(filename).stem.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-")


def main():
    if not MUSIC_DIR.exists():
        raise SystemExit(f"Missing directory: {MUSIC_DIR}")

    songs = {}

    for path in sorted(MUSIC_DIR.glob("*.js")):
        code = path.read_text(encoding="utf-8")
        metadata = parse_metadata(code, path.name)
        key = slug(path.name)

        if not key:
            continue

        songs[key] = {
            **metadata,
            "filename": path.name,
            "short_link": f"?play={key}",
            "strudel_link": strudel_link(code),
        }

    OUTPUT.write_text(
        json.dumps(songs, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    print(f"Generated {OUTPUT} with {len(songs)} experiment(s).")


if __name__ == "__main__":
    main()
