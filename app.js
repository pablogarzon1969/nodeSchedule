/*var util = require('util'),  
    http = require('http');

http.createServer(function (req, res) {  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello, i know nodejitsu.')
  res.end();
}).listen(8085);*/

/* server started */
//util.puts('> hello world running on port 81');

/*setTimeout(function () {  
  util.puts('Throwing error now.');
  throw new Error('User generated fault.');
}, 5000);*/


//var Client = require('node-rest-client').Client;



//var client = new Client();


// direct way 


// registering remote methods 
//client.registerMethod("jsonMethod", "http://autorizacionilumno.azurewebsites.net/Applications", "GET");

//client.methods.jsonMethod(function (data, response) {
// parsed response body as js object 
// console.log(data);
// raw response 
// console.log(response);
//});

//exceute every 1 min
var cron = require('node-cron');
cron.schedule('*/1 * * * *', function () {
    var shell = require('./child_helper');
    var commandList = [
        "node app.js",
        "npm run script -- PeterGood"
    ]
    shell.series(commandList, function (err) {
        //    console.log('executed many commands in a row'); 
        var client = new Client();
        client.registerMethod("jsonMethod", "http://autorizacionilumno.azurewebsites.net/Applications", "GET");
        client.methods.jsonMethod(function (data, response) {
            // parsed response body as js object 
            console.log(data);
            //raw response 
            console.log(response);
        });
        console.log('done')
    });
});


