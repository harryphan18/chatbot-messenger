const request = require("request");

const setupProfile = (req, res) => {
    // Construct the message body
    let request_body = {
        "get_started": {
            "payload": "GET_STARTED"
        },
        "whitelisted_domains": ["https://chatbot-messenger-gold-price.onrender.com"]
    }

    // Send the HTTP request to the Messenger Platform
    request({
        "uri": `https://graph.facebook.com/v17.0/me/messenger_profile?access_token=${process.env.PAGE_ACCESS_TOKEN}`,
        "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": request_body
    }, (err, res2, body) => {
        console.log(body);
        if (!err) {
            console.log('Setup messenger profile success!');
            res.status(200).send(body);
        } else {
            res.status(400).send("Unable to Setup messenger profile:" + err);
        }
    });
}

module.exports = {
    setupProfile,
}