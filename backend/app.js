const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticket');
const userRoutes = require('./routes/User');
const logsRoutes = require('./routes/logs')
const path = require('path');
app.use(express.json());
app.use(bodyParser.json());

/* Autoriser l'accès aux données*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next();
})

/* Connection de la base mongoDB */
mongoose.connect('mongodb://User:UserPass@192.168.0.110/Autotech?authSource=Autotech',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

/* Importation des routes */
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/ticket', ticketRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/logs', logsRoutes)


module.exports = app;