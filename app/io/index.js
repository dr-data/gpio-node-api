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
	io.getGPIOById = function(next,id) {
	     var result;
		 var data = gpioService.getGPIO;	
    	 for (var i = 0; i < data.length; i++) {
		 	if (data[i].headerNum == id) { 
				result = data[i];	
			} 
		 }		
		 next(null, result.value); 
	}; 
    io.setGpioOn = function(next, params) {
		 var result;
		 var data = gpioService.getGPIO;	
    	 for (var i = 0; i < data.length; i++) {
		 	if (data[i].headerNum == params.id) { 
				result = data[i];	
			} 
		 }		
		 result.set(params.value);
		 next(null, result.value); 
	};
	io.setGpioOff = function(next, params) {
		 var result;
		 var data = gpioService.getGPIO;	
    	 for (var i = 0; i < data.length; i++) {
		 	if (data[i].headerNum == params.id) { 
				result = data[i];	
			} 
		 }		
		 result.set(params.value);
		 next(null, result.value); 
	};
  	
})(module.exports);