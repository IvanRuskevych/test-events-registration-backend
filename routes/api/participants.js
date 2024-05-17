const express = require('express');
const {addNewParticipant, findAllParticipantsByEventId} = require("../../controllers/participants");
const router = express.Router();

router.post('/', addNewParticipant);
router.get('/:eventId', findAllParticipantsByEventId);

module.exports = router;