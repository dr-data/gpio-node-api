(function (gpioController) {    
   var io = require('../io'); 
   gpioController.init = function (router) {
		router.get('/', function(req, res) {
			res.json({ message: 'hooray! welcome to our api!' });   
		});
		router.route('/gpio')
		.get(function(req, res) {
				io.getGPIO(function(err,results) {
					res.json(results); 
				});				
		});
		router.route('/gpio/:id')
		.get(function(req, res) {		
			  io.getGPIOById(function(err,results) {				
					res.json(results);				
			  },req.params.id);			
		})			
		.put(function(req, res) {
			  io.setGpioOn(function(err,results) {				
					res.json(results);				
			  },req.params);		
		});
	};
})(module.exports);