const Ticket = require('../models/ticket');
const fs = require('fs');

exports.createTicket = (req, res, next) => {
    const ticketObjet = JSON.parse(req.body.ticket);
    delete ticketObjet._id;
    const ticket = new Ticket({
        ...ticketObjet,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    ticket.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneTicket = (req, res, next) => {
    Ticket.findOne({
        _id: req.params.id
    }).then(
        (ticket) => {
            res.status(200).json(ticket);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyTicket = (req, res, next) => {
    const ticketObject = req.file ? 
        {
            ...JSON.parse(req.body.ticket),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    Ticket.updateOne({ _id: req.params.id}, { ...ticketObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Ticket updated successfully !'}))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteTicket = (req, res, next) => {
    Ticket.findOne({ _id: req.params.id })
        .then((ticket) => {
            const filename = ticket.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Ticket.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
                    .catch((error) => res.status(400).json({ error }));
            });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getOwnedTicket = (req, res, next) => {
    Ticket.find({ userId: req.params.userId })
    .then((tickets) => {
        res.status(200).json(tickets)
    }).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllTicket = (req, res, next) => {
    Ticket.find().then(
        (tickets) => {
            res.status(200).json(tickets);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};