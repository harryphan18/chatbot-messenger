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

    return app.use("/", router);
}

module.exports = initWebRoutes;