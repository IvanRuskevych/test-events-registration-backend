const ctrlWrapper = (ctrlFn) => {
    return async (req, res, next) => {
        try {
            await ctrlFn(req, res);
        } catch (err) {
            next(err);
        }
    }
};

module.exports = ctrlWrapper;