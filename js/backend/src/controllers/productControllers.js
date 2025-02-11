const tables = require("../tables");

const getProducts = (_, res) => {
  tables.products
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getProducts,
};
