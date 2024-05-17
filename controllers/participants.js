const {ParticipantModel} = require("../models");
const {HttpError, ctrlWrapper} = require("../helpers")

const addNewParticipant = async (req, res) => {
    const result = await ParticipantModel.create(req.body)

    if (!result) {
        throw HttpError(400, `Participant not created`)
    }

    res.status(201).json(result)
}

const findAllParticipantsByEventId = async (req, res) => {
    const {eventId} = req.params
    const result = await ParticipantModel.find({eventId}, '-createdAt -updatedAt -_id')

    if (!result){
        throw HttpError(404, 'Participants not found')
    }

    res.status(200).json(result)
}

module.exports = {
    addNewParticipant: ctrlWrapper(addNewParticipant),
    findAllParticipantsByEventId: ctrlWrapper(findAllParticipantsByEventId)
}