const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Ticket = require('./models/ticket')
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
mongoose.connect('mongodb+srv://maBase:Oe25up66&*@cluster.ud5pfq5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster',
    { useNewUrlParser: true,
      useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


/* Middleware ticket de support */
app.get('/api/ticket', (req, res, next) =>{
    Ticket.find()
        .then(tickets => res.status(200).json(tickets))
        .catch(error => res.status(400).json({ error }));
});

app.get('/api/ticket/:id', (req, res, next) =>{
    Ticket.findOne({ _id: req.params.id })
        .then(ticket => res.status(200).json(ticket))
        .catch(ticket => res.status(404).json({ error }));
});

app.put('/api/ticket/:id', (req, res, next) =>{
    Ticket.updateOne({ _id: req.params.id },  { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Ticket modifié !'}))
        .catch(error => res.status(400).json({ error }));
})

app.delete('/api/ticket/:id', (req, res, next) =>{
    Ticket.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Ticket supprimé !'}))
        .catch(error => res.status(400).json({ error }));
})

app.post('/api/ticket', (req, res, next) =>{
    delete req.body._id;
    const ticket = new Ticket({
        ...req.body
    });
    ticket.save()
        .then(() => res.status(201).json({ message: 'Ticket enregistré !'}))
        .catch(() => res.status(400).json({ error }));
});



module.exports = app;