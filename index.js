require('dotenv').config();
const express = require('express');
const dbconnection = require('./config/dbconnection');
const app = express();
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
const port = process.env.PORT || 5000;

app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/user", productRoutes);


dbconnection.then((success, err) => {
    if(err){
        console.log('failed to connect database');
    }else{
        console.log('connected to database');
        app.listen(port, () => {console.log(`Application started at ${port}`);})
    }
})



