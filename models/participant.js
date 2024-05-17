const {Schema, model} = require("mongoose");
const {handleMongooseError} = require("../helpers");

const enumHeardAbout = ["Friends", "Social media", "Found myself"]

const participantSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    heardAbout: {type: String, enum: enumHeardAbout, required: true},
    eventId: {type: String, required: true},
}, {versionKey: false, timestamps: true});

participantSchema.post("save", handleMongooseError);

module.exports = model('participant', participantSchema);