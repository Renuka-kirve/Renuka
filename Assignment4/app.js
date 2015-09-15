/**
 * Entry point for assignment no - 4. (server side)
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

// Dependencies.

var http = require('http');
var url = require('url');
var fileUtils = require("./utils/FileUtils");
var constants = require("./config/constants");
var jsonUtils = require("./utils/JsonUtils");
var js2xmlparser = require("js2xmlparser");
try {

   http.createServer( function (request, response) { 

        if(request.method == 'GET') {

            http.get('/students',function(req,res) {

                //Taking query parameters from url
                var queryParam=url.parse(request.url,true).query;  
                var queryParamObject=new Object(JSON.stringify(queryParam));
                var qObj= JSON.parse(queryParamObject);

                fileUtils.readFile(constants.SOURCE_JSON_FILE, function handleFileReadResponse(readError, readResponse) {

                        if(readError)
                        {
                          console.log(readError);
                          response.write("Error 404:file not found!!!");
                          response.end();
                        }
                        var json=JSON.parse(readResponse);
                        json.students.sort(sortSourceJson); //sorting json data
                        if(!jsonUtils.isJsonObjectEmpty(queryParam)) // If query parameter is there.
                        {
                                //According to query parameter make the object to display
                                var jsonarray=[];  
                                var jsonObj=new Object(); 
                                for(var i=0;i<json.students.length;i++) 
                                {
                                    if(json.students[i].fName.toLowerCase() == qObj.q.toLowerCase() || json.students[i].lName.toLowerCase() == qObj.q.toLowerCase())
                                    {
                                      var arrayObj=new Object();
                                      var name=json.students[i].fName+"  "+json.students[i].lName;
                                      arrayObj.id=json.students[i].id;
                                      arrayObj.fullname=name;
                                      arrayObj.score=json.students[i].score;
                                      jsonarray.push(arrayObj);
                                    }
                                }
                                jsonObj.students=jsonarray;
                                jsonObj.students.sort(sortSourceJson);
                              
                                //check for the accept type
                                if(JSON.stringify(request.headers.accept).match("application/json"))
                                {
                                    response.end(JSON.stringify(jsonObj));
                                }//application/json
                                if(JSON.stringify(request.headers.accept).match("text/plain"))
                                {
                                   var fileStr="Id\t|fName\t|lName\t|Score \n";
                                   for(var i=0;i<jsonObj.students.length;i++) 
                                   {
                                          fileStr=fileStr+jsonObj.students[i].id+"\t|"+jsonObj.students[i].name+"\t|"+jsonObj.students[i].score+"\n";
                                   }
                                   response.end(fileStr);
                                }//text/plain
                                if(JSON.stringify(request.headers.accept).match("application/xml"))
                                {
                                    var jsonarray=[];
                                    var jsonNewObj=new Object();
                                    for(var i=0;i<jsonObj.students.length;i++) 
                                    {
                                        var arrayObj=new Object();
                                        var idObj=new Object();
                                        idObj.id=jsonObj.students[i].id;
                                        var name=jsonObj.students[i].name;
                                        arrayObj['@']=idObj;
                                        arrayObj.name=name;
                                        arrayObj.score=jsonObj.students[i].score;
                                        jsonarray.push(arrayObj);
                                    }
                                    jsonNewObj.Student=jsonarray;
                                    //jsonObj.Student.sort(sortSourceJson);
                                    var xmlObject=js2xmlparser("students", jsonNewObj);
                                    response.end(xmlObject);
                                }
                                
                        }// If query parameter is there. 
                        else {//If query parameter is not there.
                                if(JSON.stringify(request.headers.accept).match("application/json"))
                                {
                                     response.end(JSON.stringify(json));
                                }//application/json
                                if(JSON.stringify(request.headers.accept).match("text/plain"))
                                {
                                   var fileStr="Id\t|fName\t|lName\t|Score \n";
                                   for(var i=0;i<json.students.length;i++) 
                                   {
                                          fileStr=fileStr+json.students[i].id+"\t|"+json.students[i].fName+"\t|"+json.students[i].lName+"\t|"+json.students[i].score+"\n";
                                   }
                                   response.end(fileStr);
                                }//text/plain
                                if(JSON.stringify(request.headers.accept).match("application/xml"))
                                {
                                    var jsonarray=[];
                                    var jsonNewObj=new Object();
                                    for(var i=0;i<json.students.length;i++) 
                                    {
                                        var arrayObj=new Object();
                                        var idObj=new Object();
                                        idObj.id=json.students[i].id;
                                        var name=json.students[i].fName+"  "+json.students[i].lName;
                                        arrayObj['@']=idObj;
                                        arrayObj.name=name;
                                        arrayObj.score=json.students[i].score;
                                        jsonarray.push(arrayObj);
                                    }
                                    jsonNewObj.Student=jsonarray;
                                    //jsonObj.Student.sort(sortSourceJson);
                                    var xmlObject=js2xmlparser("students", jsonNewObj);
                                    response.end(xmlObject);
                                }
                        } //If query parameter is not there.

                });
            }); //http.get
        } // GET
        else {
          response.write("Request method must be GET");
        }
   }).listen(3000); //Create server
}
catch(e) {
      console.log("Exception : Unable to create server");
} 
function sortSourceJson(student1, student2) {
    
    if (student1.score < student2.score) {
        return 1;    
    }
    
    if (student1.score > student2.score) {
        return -1;        
    }
    return 0;
}

