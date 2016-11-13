var express = require('express');
var app = express();
var rpio = require('rpio');

rpio.open(11, rpio.OUTPUT, rpio.LOW);

var options = {
	index: "index.html"
};

app.use('/', express.static('public', options));
app.post('/red', function(req, res){
	startGpio();
	res.send('hello from red');
});

var server = app.listen(8081, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('my app is listening at http://%s:%s', host, port);
});

function startGpio(){
	/*
	 *  * The sleep functions block, but rarely in these simple programs does one care
	 *   * about that.  Use a setInterval()/setTimeout() loop instead if it matters.
	 *    */
	for (var i = 0; i < 5; i++) {
		/* On for 1 second */
		rpio.write(11, rpio.HIGH);
		rpio.sleep(1);

		/* Off for half a second (500ms) */
		rpio.write(11, rpio.LOW);
		rpio.msleep(500);
	}
}
