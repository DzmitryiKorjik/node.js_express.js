// Importation du module Express pour créer des applications web
const express = require('express');

// Création d'une application Express
const app = express();

// Configuration du dossier des vues et du moteur de rendu (EJS)
app.set('views', __dirname + '/views'); // Définit le répertoire contenant les fichiers de vue
app.set('view engine', 'ejs'); // Définit EJS comme moteur de rendu

// Middleware pour analyser les données des formulaires (format URL-encoded)
app.use(express.urlencoded({ extended: false }));

// Middleware pour servir des fichiers statiques (CSS, images, etc.) depuis le dossier "public"
app.use(express.static('public'));

// Route GET pour la page d'accueil
app.get('/', (req, res) => {
    // Rend la vue "index.ejs" lorsque l'utilisateur accède à "/"
    res.render('index');
});

// Route GET pour la page "À propos"
app.get('/about', (req, res) => {
    // Rend la vue "about.ejs" lorsque l'utilisateur accède à "/about"
    res.render('about');
});

// Route GET pour afficher une page utilisateur dynamique
app.get('/user/:username', (req, res) => {
    const username = req.params.username; // Récupère le paramètre dynamique "username"
    // Rend la vue "user.ejs" avec la variable "username"
    res.render('user', { username });
});

// Route POST pour vérifier le nom d'utilisateur
app.post('/check-user', (req, res) => {
    let username = req.body.username; // Récupère le nom d'utilisateur depuis les données du formulaire

    if (username === "") {
        // Si le champ est vide, redirige vers la page d'accueil
        return res.redirect('/');
    } else {
        // Sinon, redirige vers la page de l'utilisateur correspondant
        return res.redirect('/user/' + username);
    }
});

// Définition du port sur lequel le serveur écoute
const PORT = 3000;

// Lancement du serveur
app.listen(PORT, () => {
    // Message affiché dans la console lorsque le serveur démarre
    console.log(`Server started: http://localhost:${PORT}`);
});
