const {EventModel} = require('../models');
const {ctrlWrapper, HttpError} = require('../helpers');

const getAllEvents = async (req, res) => {
    const result = await EventModel.find();
    if (!result) {
        throw HttpError(404, 'No Event Found');
    }

    res.json(result);
};

module.exports = {
    getAllEvents: ctrlWrapper(getAllEvents),
};
