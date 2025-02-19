# EcoRide

EcoRide est une plateforme de covoiturage écologique visant à réduire l'impact environnemental des déplacements en encourageant le covoiturage. La plateforme propose des voyages économiques et respectueux de l'environnement pour les utilisateurs.

## Fonctionnalités

### Visiteurs
- **Page d'accueil** : Présentation de l'entreprise avec des images, une barre de recherche pour trouver un itinéraire, et un bas de page avec les informations de contact.
- **Menu de navigation** : Accès rapide à la page d'accueil, aux covoiturages, à la connexion, et à la page de contact.
- **Vue des covoiturages** : Affichage des itinéraires disponibles avec détails sur le chauffeur, le nombre de places restantes, le prix, la date et l'heure de départ et d'arrivée, et si le voyage est écologique.
- **Filtres des covoiturages** : Filtrage des voyages par aspect écologique, prix, durée, et note minimale du chauffeur.

### Utilisateurs
- **Détail d'un covoiturage** : Affichage détaillé du voyage avec avis du conducteur, modèle et marque du véhicule, préférences du conducteur.
- **Participation à un covoiturage** : Possibilité de rejoindre un voyage si des places sont disponibles et si l'utilisateur a suffisamment de crédits.
- **Création de compte** : Inscription avec pseudo, email et mot de passe sécurisé. 20 crédits offerts à l'inscription.
- **Espace Utilisateur** : Sélection du rôle (chauffeur, passager ou les deux) et gestion des informations personnelles et des véhicules.
- **Saisie d'un voyage** : Création d'un itinéraire avec adresse de départ et d'arrivée, sélection du véhicule, et fixation du prix.
- **Historique des covoiturages** : Visualisation et gestion des covoiturages passés, possibilité d'annuler un voyage.
- **Démarrer et arrêter un covoiturage** : Démarrage et fin de voyage depuis l'espace utilisateur, validation des trajets par les participants.

### Employés
- **Espace Employé** : Validation des avis déposés par les participants, visionnage des covoiturages ayant rencontré des problèmes.

### Administrateurs
- **Espace Administrateur** : Gestion des comptes des employés, visualisation des statistiques des covoiturages et des crédits gagnés, suspension et réactivation des comptes des utilisateurs et des employés.

## Stack Technique
- **Front-end** : HTML5, CSS (Bootstrap), JavaScript
- **Back-end** : PHP avec PDO
- **Base de données relationnelle** : MySQL
- **Base de données NoSQL** : MongoDB
- **Déploiement** : Heroku, Vercel, Azure

## Installation et Déploiement

### Prérequis
- Node.js
- NPM
- MySQL
- MongoDB

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/ecoride.git
   cd ecoride
