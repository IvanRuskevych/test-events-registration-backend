const {EventModel} = require('../models');
const {ctrlWrapper, HttpError} = require('../helpers');

const getAllEvents = async (req, res) => {
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;

    const total = await EventModel.countDocuments();
    const events = await EventModel.find().skip(skip).limit(parseInt(limit));

    if (!events) {
        throw HttpError(404, 'No Event Found');
    }

    const result={
        total,
        events,
        page: parseInt(page),
    }
    console.log("result", result)
    res.json(result);
};

module.exports = {
    getAllEvents: ctrlWrapper(getAllEvents),
};
