const Ticket = require('../models/ticket');

exports.createTicket = (req, res, next) => {
    const ticket = new Ticket({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        priority: req.body.priority,
        userId: req.body.userId
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
    const ticket = new Ticket({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        priority: req.body.priority,
        userId: req.body.userId
    });
    Ticket.updateOne({ _id: req.params.id}, ticket).then(
        () => {
            res.status(201).json({
                message: 'Ticket updated successfully !'
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

exports.deleteTicket = (req, res, next) => {
    Ticket.deleteOne({ _id: req.params.id}).then(
        () => res.status(200).json({
            message: 'Ticket deleted successfully !'
        })
    ).catch(
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