const {query} = require ("../../../DB/connection.js")


module.exports.allProducts = (req, res) => {
  // query.execute(`insert into users (name,emali,password) values ('omar','omar@gmail.com','12334')`)
  query.execute(`select * from products`, (err, data) => {
    if (err) {
      return res.json({ message: err });
    } else {
      res.json({ success: true, data });
    }
  });
};

module.exports.singleProduct = (req, res) => {
  query.execute(
    `select * from products where id=${req.params.id}`,
    (err, data) => {
      if (err) {
        return res.json({ err });
      } else {
        return res.json({ success: true, data });
      }
    }
  );
};

// add product

module.exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;
  query.execute(
    `insert into products (name,price,description) values ('${name}','${price}','${description}')`
  );
  return res.json({
    success: true,
    message: "product already added successfully!",
  });
};

// update  product

module.exports.updateProduct = (req, res) => {
  const { name, price, description } = req.body;
  query.execute(
    `update products set name='${name}' , price='${price}', description='${description}' where id= ${req.params.id}`
  );
  return res.json({ success: true, message: "update product successfully!" });
}; 

// delete product
module.exports.deleteProducts = (req, res) => {
  query.execute(`delete from products where id=${req.params.id}`);
  return res.json({ success: true, message: "product already deleted!" });
};

// single product

module.exports.esrchProduct = (req, res) => {
  query.execute(
    `select * from products where name like '%${req.params.word}%'`,
    (err, data) => {
      if (err) {
        return res.json(err);
      } else {
        return res.json({ success: true, data });
      }
    }
  );
};