/**
 * client side for assignment 4
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

var http = require('http');

// Options to be used by request 
var options = {
   host: 'localhost',
   port: '3000',
   path: '/students/?q=john',
   headers: {'Accept':'application/json'}
};

// Callback function is used to deal with response
var callback = function(response){
   
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();