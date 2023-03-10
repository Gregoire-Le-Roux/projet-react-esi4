# projet-react-esi4

Groupe : Grégoire LEROUX (Back) / Florian BERTHELOT (Front)

### Présentation projet :

Site de e-commerce gérant la vente de Surf. 

Lien: https://projet-react-esi4.vercel.app/

Plusieurs pages prévues :

FRONT :
- Page Présentation (7h)
- Page Connexion (3h)
- Page Panier (4h)

BACK :
- Page Commandes (6h)
- Page Produits (4h)

Des maquettes sont disponibles dans le dossier "Maquettes" à la racine du projet.

### Gestion prévisionnelle : Temps total ~16h

## Outils utilisés :

##### Firebase : (https://firebase.google.com/)
Firebase est un ensemble de services d'hébergement pour n'importe quel type d'application.


##### TypeScript : (https://www.typescriptlang.org/)
TypeScript est un langage de programmation libre et open source développé par Microsoft, 
qui a pour but d'améliorer et de sécuriser la production de code JavaScript.


##### Vite : (https://vitejs.dev/)
Vite est un outil permettant de démarrer rapidement un projet à partir d'un modèle de base pour les frameworks populaires.


##### React router dom : (https://reactrouter.com/en/main)
Le package react-router-dom contient des liaisons pour l'utilisation de React Router dans les applications web.


##### Tailwind : (https://tailwindcss.com/)
Tailwind CSS est un framework utility-fist CSS avec des classes prédéfinies utilisable pour construire et concevoir des pages web directement dans le balisage.


##### Figma : (https://www.figma.com)
Figma est un éditeur de graphiques vectoriels et un outil de prototypage. C'est à l'aide de cet outil que nous avons réalisé les maquettes.

## Utiliser le projet en local

Pour récupérer et utiliser le projet en local, il faut tout d'abord récupèrer le dossier du projet en zip.

Ensuite, se mettre à la racine du projet et installer les dépendances avec : 
```
pnpm install
```

Mettre en place les variables d'environnement en copiant le fichier ".env.example" en ".env" puis mettre les accès vers firebase.

Enfin, lancer le projet avec la commande : 
```
pnpm run dev
```