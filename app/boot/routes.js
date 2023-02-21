const express = require("express");
const router = express.Router()
module.exports.routes = function (app) {
    const routes = [
        require("../modules/0_mock_module/routes")(router),
    ];
    app.use('/api/v1/', routes)
}