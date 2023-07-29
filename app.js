const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const viewEngine = require("./src/configs/viewEngine");
const webRoutes = require("./src/routes");

require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: ['http://localhost:8080', 'https://chatbot-messenger-gold-price.onrender.com']}));
viewEngine(app);
webRoutes(app);

app.listen(process.env.PORT, (error) => {
    console.log(`App is listening at port ${process.env.PORT}...`);
});