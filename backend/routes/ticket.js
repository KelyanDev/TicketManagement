const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket');
const auth = require('../middleware/auth');

router.get('/', auth, ticketCtrl.getAllTicket);
router.post('/', auth, ticketCtrl.createTicket);
router.get('/:id', auth, ticketCtrl.getOneTicket);
router.put('/:id', auth, ticketCtrl.modifyTicket);
router.delete('/:id', auth, ticketCtrl.deleteTicket);

module.exports = router;
