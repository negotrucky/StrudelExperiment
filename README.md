# 🎵 Strudel Experiments

A collection of musical experiments, sketches and tests made with [Strudel](https://strudel.cc/).

## ▶️ Listen to the experiments

**[🌐 Open Strudel Experiments](https://negotrucky.github.io/StrudelExperiment/)**

The website is automatically updated whenever new experiments are added to `strudel/`.

---

## 🎼 Adding an experiment

Create a `.js` file inside:

```text
strudel/
```

For example:

```js
// @title: Neon Rain
// @artist: negotrucky
// @bpm: 128

setcpm(128 / 4)

stack(
  note("<c3 eb3 g3 bb3>").s("sawtooth"),
  s("bd ~ bd bd")
)
```

### Metadata

Metadata is optional and must be placed near the beginning of the file:

```js
// @title: Track name
// @artist: artist name
// @bpm: 128
```

If no `@title` is provided, the filename is used as the title.

---

## 🚀 Publishing

Simply commit your new `.js` file to GitHub.

```text
strudel/
└── my-new-experiment.js
```

GitHub Actions automatically scans the directory and generates `songs.json`.

The GitHub Pages website then uses this catalogue to display the experiments and provide links to Strudel.

### Workflow

```text
strudel/my-new-experiment.js
              │
              ▼
          git commit
              │
              ▼
       GitHub Actions
              │
              ▼
          songs.json
              │
              ▼
        GitHub Pages
              │
              ▼
           Strudel
```

---

## 🔗 Shareable links

Each experiment has its own short, shareable link:

```text
https://negotrucky.github.io/StrudelExperiment/?play=my-new-experiment
```

The link redirects to the corresponding Strudel URL.

The short link remains the same even when the experiment itself is updated.

---

## 📁 Project structure

```text
StrudelExperiment/
├── .github/
│   └── workflows/
│       └── generate.yml
├── strudel/
│   ├── neon-rain.js
│   ├── bass-test.js
│   └── ...
├── generate.py
├── songs.json
├── index.html
└── README.md
```

---

Made
