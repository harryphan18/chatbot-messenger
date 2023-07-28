var express = require("express");
let router = express.Router();

var HomeController = require("../controllers/HomeController");
var WebhookController = require("../controllers/WebhookController");

let initWebRoutes = (app) => {
    router.get("/", HomeController.getHomePage);

    // webhook
    router.post("/webhook", WebhookController.postWebhook);
    router.get("/webhook", WebhookController.getWebhook);

    return app.use("/", router);
}

module.exports = initWebRoutes;