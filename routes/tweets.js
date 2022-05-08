
const tweetController = require("../controllers/tweet.controller");

module.exports = (app) =>{
    app.post("/twitter/api/v1/tweet", tweetController.create);
}