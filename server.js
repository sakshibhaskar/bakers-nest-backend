const cors = require("cors");
const express = require('express');
const dotenv = require("dotenv");

const Product = require('./models/productModel');

const app = express();
const db = require("./db.js");

dotenv.config();
//This line is using the dotenv package to load environment variables from a file named .env.
//The config() method reads the file and sets the environment variables defined in it.
//This is useful for keeping sensitive information (like API keys) out of your codebase.


app.use(cors({
    origin: "*",
}));

// This line is configuring the CORS (Cross-Origin Resource Sharing) middleware for your Express application.
// CORS is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page.
// The origin: "*" setting allows any origin to access the resources, meaning your API can be accessed from any domain.

app.use(express.json()); //enables your Express application to handle JSON-encoded request bodies.
//The express.json() middleware parses the incoming request body and makes it available under the req.body property.

const productsRoute = require('./routes/productsRoute');
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/products/', productsRoute)
app.use('/api/orders', ordersRoute)

app.get("/", (req, res) => {
    res.send("Server working 🔥" + port);
});

const port = process.env.PORT || 8000;

app.listen(port, ()=> 'Server running on port');
//This method tells your Express application to listen on a specific port for incoming connections.