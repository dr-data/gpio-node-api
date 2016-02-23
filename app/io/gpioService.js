var gpio = require('gpio');
(function (gpioService) {
	var gpioArray = [];
	gpioService.init = function () {
		for(var i = 0; i < 8; i++) {
			var gpioItem = gpio.export(i, {
					direction: 'out',
					interval: 200, 
					ready: function() {   }
				});
			gpioArray.push(gpioItem);
		}
	};	
    gpioService.getGPIO = gpioArray;
})(module.exports);