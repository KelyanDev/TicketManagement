const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ticketRoutes = require('./routes/ticket');
const userRoutes = require('./routes/User');
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
mongoose.connect('mongodb+srv://maBase:admin@cluster.ud5pfq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/api/ticket', ticketRoutes);
app.use('/api/auth', userRoutes);


module.exports = app;