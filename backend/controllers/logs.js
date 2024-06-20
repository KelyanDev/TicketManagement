const fs = require('fs');

exports.getLogs = (req, res, next) => {
    const service = req.params.service;
    let logFilePath;

    switch (service) {
        case 'squid':
            logFilePath = '/var/log/squid/access.log';
            break;
        case 'dhcp':
            logFilePath = '/var/log/dhcpd.log';
            break;
        default:
            return res.status(400).json('Service non reconnu');
    }

    fs.readFile(logFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json('Erreur lors de la lecture des logs');
        }
        res.send(data);
    });
};