var express = require("express");
let router = express.Router();

var HomeController = require("../controllers/HomeController");
var WebhookController = require("../controllers/WebhookController");
const MessengerProfileController = require("../controllers/MessengerProfileController");

let initWebRoutes = (app) => {
    router.get("/", HomeController.getHomePage);

    // webhook
    router.post("/webhook", WebhookController.postWebhook);
    router.get("/webhook", WebhookController.getWebhook);

    // messenger profile
    router.post("/setup-profile", MessengerProfileController.setupProfile);

    // app.use(function (req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888', 'https://chatbot-messenger-gold-price.onrender.com');
    //     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    //     res.setHeader('Access-Control-Allow-Credentials', true);
    //     next();
    // });
    return app.use("/", router);
}

module.exports = initWebRoutes;