const {Schema, model} = require('mongoose');

const eventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    eventDate: {type: Date, required: true},
    organizer: {type: String, required: true},
})

const EventModel = model("event", eventSchema)

module.exports = EventModel