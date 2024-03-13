const express = require ('express');
const productRouter =require ("./src/modules/product/product.routes.js" )
const app = express()
const port = 3000
const cors = require ("cors");
app.use(express.json())
app.use(cors())
 
// product router
app.use("/products", productRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));