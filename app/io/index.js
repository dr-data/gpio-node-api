(function (io) {    
    var gpioService = require('./gpioService');  
	gpioService.init();	
	io.getGPIO = function(next) {
	    var reduced = [];
     	reduced = gpioService.getGPIO.map(
			function(item) {
				return {
					headerNum: item.headerNum,
					value: item.value,
					interval: item.interval					
				};
			});
		next(null, reduced); 
	};  
	io.getGPIOById = function(next, id) {
	    var result = gpioService.getGPIO[id];
		next(null, 1-result.value); 
	}; 
    io.setGpio = function(next, id, value) {
		var result = gpioService.getGPIO[id];	
    	result.set(1-value);
		next(null, result.value); 
	};
  	
})(module.exports);