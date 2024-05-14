const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket');
const auth = require('../middleware/auth');

router.get('/', ticketCtrl.getAllTicket);
router.post('/', ticketCtrl.createTicket);
router.get('/:id', ticketCtrl.getOneTicket);
router.put('/:id', ticketCtrl.modifyTicket);
router.delete('/:id', ticketCtrl.deleteTicket);

module.exports = router;
