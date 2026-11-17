# Tall-IA-video-generation

Un site web moderne pour générer des idées de vidéos IA, inspiré d’un studio créatif, sans dépendre d’un backend coûteux.

## Aperçu

- Interface premium pour rédiger des prompts de vidéo
- Styles visuels multiples : Cinéma, Animation, Mode, Lifestyle, Futuriste, Nature
- Sélection de durée et format
- Résultat simulé de génération avec aperçu visuel
- Historique des créations

## Démarrage local

1. Ouvrez simplement le fichier `index.html` dans votre navigateur
2. Ou lancez un serveur local :

```bash
python -m http.server 8000
```

Puis ouvrez : http://localhost:8000

## Ce que contient le projet

- `index.html` : structure du site
- `style.css` : design premium et responsive
- `script.js` : logique d’interaction et génération simulée

## Note

Ce projet est une démonstration front-end gratuite. Pour connecter un vrai moteur de génération vidéo IA, il faudra brancher un service backend avec une clé API (ex. Replicate, Hugging Face, Runway, etc.).
