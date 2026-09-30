# 🎵 Strudel Experiments

Petite collection de mes expérimentations musicales avec [Strudel](https://strudel.cc/).

## ▶️ Écouter les morceaux

**[🌐 Ouvrir Strudel Experiments](https://negotrucky.github.io/StrudelExperiment/)**

La page est automatiquement mise à jour lorsque de nouveaux fichiers sont ajoutés dans `strudel/`.

---

## 🎼 Ajouter une expérience

Créer un fichier `.js` dans :

```text
strudel/
```

Par exemple :

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

### Métadonnées

Les métadonnées sont optionnelles :

```js
// @title: Nom du morceau
// @artist: nom de l'artiste
// @bpm: 128
```

Si `@title` n'est pas renseigné, le nom du fichier est utilisé.

---

## 🚀 Publication

Il suffit de faire un commit dans GitHub :

```text
strudel/
└── mon-morceau.js
```

GitHub Actions détecte automatiquement les fichiers `.js` et génère `songs.json`.

Le site utilise ensuite ce catalogue pour afficher les expériences et générer les liens vers Strudel.

### Workflow

```text
strudel/mon-morceau.js
          │
          ▼
       git push
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

## 🔗 Liens partageables

Chaque expérience possède également un lien court :

```text
https://negotrucky.github.io/StrudelExperiment/?play=mon-morceau
```

Ce lien redirige automatiquement vers l'URL Strudel correspondante.

Le lien court reste donc identique même si le morceau est modifié.

---

## 📁 Structure

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

Made with 🎵, code and questionable musical decisions.
