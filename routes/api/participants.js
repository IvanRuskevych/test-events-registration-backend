const express = require('express');
const {addNewParticipant, findAllParticipantsByEventId} = require("../../controllers/participants");
const router = express.Router();

router.post('/', addNewParticipant);
router.get('/', findAllParticipantsByEventId);

module.exports = router;