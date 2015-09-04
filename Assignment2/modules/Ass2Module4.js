/**
 * assignment no - 2 (Module 4).
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

//Dependencies

//Importing xml2js(DOM generation library) to convert JSON data into xml
var xmlTojs=require('xml2js');

//Importing File I/O System
var fs = require("extfs");

var module4= function() {

 	// Public functions.
    this.writeJsonToXmlFile = writeJsonToXmlFile;

    function writeJsonToXmlFile(filepath,jsonObject)
    {
    	var builder = new xmlTojs.Builder({rootName:'Students'});
    	fs.writeFile(filepath,builder.buildObject(jsonObject),function xmlError(error){
            if(error) {
                console.log(error);
            }
            console.log("JsonObject successfully written to specified xml file");
    	});
    }
 }

// Export module.
module.exports = new module4();




