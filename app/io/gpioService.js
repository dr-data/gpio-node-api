var gpio = require('gpio');
(function (gpioService) {
	var gpioArray = [];
	var gpioMapArray = [17,18,27,22,23,24,25,4];
	gpioService.init = function () {
		console.log('Initializing gpio...');
		for(var i = 0; i < 8; i++) {
			var gpioItem = gpio.export(gpioMapArray[i], {
					direction: 'out',
					interval: 200, 
					ready: function() { 
						console.log(pioMapArray[i] + ' is activated');
					}
				});
			gpioArray.push(gpioItem);
		}
	};	
    gpioService.getGPIO = gpioArray;
})(module.exports);