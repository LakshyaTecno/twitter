
const authController = require("../controllers/auth.controller");

module.exports = (app) =>{
    app.post("/twitter/api/v1/login", authController.signin);
}