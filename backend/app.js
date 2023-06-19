const express = require('express'); //import de express

const app = express(); //creation de l'application app de type express

app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    res.json({ message: 'Votre requete a bien été reçue !'});  //retourne une reponse en json
    next();
});

app.use((req, res, next) => {
    console.log('Réponse renvoyée avec succès !');
});

module.exports = app;
