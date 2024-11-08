const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
require('dotenv').config()

app.use(express.json())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))

const bookRoutes=require('./routes/book.router')
const orderRoutes=require('./routes/order.router')

app.use("/api/books",bookRoutes)
app.use("/api/orders",orderRoutes)

async function main() {
  await mongoose.connect(process.env.CONNECTION_STRING);
  app.use("/", (req, res) => {
    res.send("Book Store Server is running!");
  });
}

main().then(() => console.log("Mongodb connect successfully!")).catch(err => console.log(err));
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});