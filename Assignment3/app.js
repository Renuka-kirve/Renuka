/**
 * Entry point for assignment no - 3.
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

// Dependencies.

var http=require('http');
var url = require('url');
var fileUtils = require("./utils/FileUtils");


try {

      var server=http.createServer(function(request,response) {
	
          if (request.url === '/favicon.ico') {  // For removing favicon.ico request which might come.
    	         response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    	         response.end();
   		         return;
  	      }
          //parse the request containing file name
	        var pathName = url.parse(request.url).pathname;
	        var imgPath='.'+pathName;
   	
   	      if(request.method == 'GET') {
   	      
   		       fileUtils.readFile(imgPath, function handleimageFileResponse(readError, readResponse) {

                  if(readError) {

                      console.log(readError);
                      response.writeHead(404, {'Content-Type': 'image/jpg'}); // HTTP Status: 404 : NOT FOUND
                      response.write("Error 404:Image file not found!!!");
                      response.end();
                  }
                  response.writeHead(200, {'Content-Type': 'image/jpg'});  // HTTP Status: 200 : OK page found
                  response.end(readResponse); // Response back that image
            });
          }
   	      else {
   		       
              console.log("Request must be GET request!!")
   	      }

      }).listen(3000);  //End of server creation

}
catch(e) {
      console.log("Exception : Unable to create server");
}
