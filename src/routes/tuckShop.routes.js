const {
  GET_TOTAL
} = require('../constants/endpointConstants');

module.exports = (app) => {
    app.post(GET_TOTAL, async (req, res) => {
        const selectedItems = req.body
        console.log(selectedItems)
        let total = 0;
        // TODO: Calculate total of selected items and send total out of api

        res.status(200).send({total})
    });
}