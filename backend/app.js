const express = require('express'); //import de express

const app = express(); //creation de l'application app de type express

app.use((req, res) => {
    res.json({ message: 'Votre requete a bien été reçue !'})
})

module.exports = app;
