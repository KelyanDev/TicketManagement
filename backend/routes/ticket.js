const express = require('express');
const router = express.Router();
const ticketCtrl = require('../controllers/ticket');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', ticketCtrl.getAllTicket);
router.post('/', auth, multer, ticketCtrl.createTicket);
router.get('/:id', ticketCtrl.getOneTicket);
router.get('/user/:userId', ticketCtrl.getOwnedTicket);
router.put('/:id', auth, multer, ticketCtrl.modifyTicket);
router.delete('/:id', auth, ticketCtrl.deleteTicket);

module.exports = router;