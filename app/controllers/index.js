(function (controllers) {    
    var gpioController = require("./gpioController");
    controllers.init = function (app) {
        gpioController.init(app);
    };
})(module.exports);