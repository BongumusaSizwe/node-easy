const {
  GET_TOTAL
} = require('../constants/endpointConstants');


module.exports = (app) => {
    app.post(GET_TOTAL, async (req, res) => {
        const selectedItems = req.body
        let total = 0;
        // TODO: Calculate total of selected items and send total out of api

      for(let i=0;i<selectedItems.length;i++){
        console.log(selectedItems[i].price);
        total += selectedItems[i].price;
      }
      console.log(total);
      
      res.status(200).send({total})
    });
}