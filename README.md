# Learning Platform Project

Ce projet est une plateforme d'apprentissage qui utilise MongoDB, Redis et Node.js pour gérer les cours.

## 🛠️ Installation et lancement du projet

### Prérequis

- Node.js version 14 ou supérieure
- MongoDB et Redis installés localement ou accessibles via une URI distante

### Étapes d'installation

#### 1. Création de votre dépôt :

- Sur [Github.com](https://github.com)
  - Créez un nouveau dépôt public
  - Nommez-le "learning-platform-nosql"
  - Ne l'initialisez pas avec un README pour le moment

#### 2. Configuration de votre environnement local :

Clonez mon dépôt template (ce dépôt) :

```bash
git clone https://github.com/Wijdane/learning-platform-template
```

Accédez au répertoire cloné :

```bash
cd learning-platform-template
```

Renommez le dépôt distant origin :

```bash
git remote remove origin
git remote add origin https://github.com/[votre-compte]/learning-platform-nosql
```

Poussez le code vers votre dépôt :

```bash
git push -u origin main
```

#### 3. Installation des dépendances :

Installez les dépendances nécessaires pour exécuter le projet :

```bash
npm install
```

## 📂 Structure du projet

Voici un aperçu de la structure du projet :

```
📂 learning-platform
├── 📁 config          # Fichiers de configuration pour MongoDB, Redis, etc.
│   ├── db.js          # Connexions à MongoDB et Redis
│   └── env.js         # Chargement des variables d'environnement
├── 📁 controllers     # Logique métier des API
│   └── courseController.js  # Contrôleurs pour les opérations sur les cours
├── 📁 routes          # Définition des routes de l'API
│   └── courseRoutes.js       # Routes pour les opérations sur les cours
├── 📁 services        # Services pour interagir avec MongoDB et Redis
│   ├── mongoService.js       # Fonctions MongoDB
│   └── redisService.js       # Fonctions Redis
├── 📁 models          # Modèles pour MongoDB (à ajouter si nécessaire)
├── 📄 package.json     # Dépendances et scripts
├── 📄 package-lock.json # Verrouillage des versions des dépendances
├── 📄 .env.example     # Exemple de fichier d'environnement
├── 📄 README.md        # Documentation du projet
└── 📄 app.js           # Point d'entrée de l'application
```

### Description des dossiers :

- `config/`: Contient les fichiers de configuration pour les services comme MongoDB et Redis.
  - `db.js`: Définit les connexions aux bases de données.
  - `env.js`: Charge les variables d'environnement.
- `controllers/`: Gère la logique métier des API.
  - `courseController.js`: Contient les contrôleurs pour les cours.
- `routes/`: Définit les routes de l'API.
  - `courseRoutes.js`: Contient les routes liées aux cours.
- `services/`: Fournit des fonctions pour interagir avec MongoDB et Redis.
  - `mongoService.js`: Définit les fonctions spécifiques à MongoDB.
  - `redisService.js`: Définit les fonctions spécifiques à Redis.
- `models/`: Définit les modèles pour MongoDB (si nécessaire).
- `package.json`: Décrit les dépendances et les scripts du projet.
- `package-lock.json`: Verrouille les versions des dépendances.
- `.env.example`: Exemple de configuration d'environnement.
- `README.md`: Documentation principale du projet.
- `app.js`: Point d'entrée principal de l'application.

## ✨ Choix techniques

### MongoDB
- **Utilisation** : Stockage structuré des cours.
- **Avantages** : Scalabilité et support des requêtes complexes.

### Redis
- **Utilisation** : Mise en cache des cours pour améliorer les performances.
- **Avantages** : Faible latence pour les données fréquemment consultées.

### Node.js avec Express
- **Utilisation** : Configuration rapide et flexible des APIs RESTful.

### Postman
- **Utilisation** : Test des APIs en local de manière efficace.
- **Avantages** : Interface graphique intuitive, possibilité d'automatiser les tests d'API, support pour la gestion de variables d'environnement et l'import/export de collections de requêtes.

### Architecture
- Basée sur une séparation claire entre les routes, les contrôleurs, et les services pour un code maintenable.

- Utilisation de MongoDB et Redis pour stocker et mettre en cache les données.
- Utilisation de Node.js avec Express pour configurer les APIs RESTful.
- Utilisation de Postman pour tester les APIs en local de manière efficace.
