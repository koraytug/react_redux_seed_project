const data = require('../models/customer.data');
// exports.customerList = (req, res) => {
//   res.send('Hello this will return customer list');
// };

module.exports = {
  customerList: (req, res) => {
    console.log('req geldi');
    if (req.query.customername !== undefined && req.query.customername !== '') {
      const result = Object.values(data.customers.items).filter((customer) =>
        customer.name.startsWith(req.query.customername)
      );
      res.send(result);
    } else {
      res.send(data);
    }
  },
};
