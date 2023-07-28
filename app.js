var express = require("express");
var bodyParser = require("body-parser");
var viewEngine = require("./src/configs/viewEngine");
var webRoutes = require("./src/routes");

require('dotenv').config();
const app = express();

viewEngine(app);
webRoutes(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.PORT, (error) => {
    console.log(`App is listening at port ${process.env.PORT}...`);
});