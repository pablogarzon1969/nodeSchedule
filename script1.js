var cron = require('node-cron');
 
cron.schedule('* * * * *', function(){


var Client = require('node-rest-client').Client;
var client = new Client();
// registering remote methods 
client.registerMethod("jsonMethod", "http://autorizacionilumno.azurewebsites.net/Applications", "GET");
 
client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object 
   console.log(data);
    // raw response 
   // console.log(response);
});


  console.log('running a task every minute');
});