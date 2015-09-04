/**
 * Entry point for assignment no - 2.
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

// Dependencies.
var constants = require("./config/constants");
var fileUtils = require("./utils/FileUtils");
var jsonUtils = require("./utils/JsonUtils");
var module1= require("./modules/Ass2Module1.js");
var module2= require("./modules/Ass2Module2.js");
var module3= require("./modules/Ass2Module3.js");
var module4= require("./modules/Ass2Module4.js");
try
{
    console.log("\n Source JSON file path: " + constants.SOURCE_JSON_FILE);
    // Step 1: Validate existenece of source.json file.
    fileUtils.isFileExists(constants.SOURCE_JSON_FILE, function handleFileExistsResponse(isExists) {

        if (!isExists) 
        {
            console.log("\n Source JSON file does not exists.");
            return;
        }
        fileUtils.readFile(constants.SOURCE_JSON_FILE, function handleFileReadResponse(readError, readResponse) {
        
            if (readError) 
            {
                console.log("\n Error reading source JSON file.");
                return;
            }
			//___________________________________ Module 1 Result _________________________________________
            module1.returnJsonObject(constants.SOURCE_JSON_FILE, function handleFileObjectResponse(error, response) {

            	if(error)
            	{
            		 console.log("\n Error returning JSON Object.");
                	 return;	
            	}
            	console.log("jsonobject returning from module1:"+JSON.stringify(response));
            //___________________________________ Module 2 Result _________________________________________
            	
		response.students.sort(module2.sortJsonObject);
                console.log("Sorted jsonobject returning from module2:"+JSON.stringify(response));

                
            //___________________________________ Module 3 Result _________________________________________	
            	fileUtils.isFileExists(constants.DESTINATION_TEXT_FILE, function handleFileExistsResponse(isExists) {

         			if (isExists && !fileUtils.isFileEmpty(constants.DESTINATION_TEXT_FILE)) 
        			{
            			console.log("Warning : You are overriding the contents of this txt file");
        			} 
        			module3.writeJsonToFile(constants.DESTINATION_TEXT_FILE,response);  		

            	}); //Existance of destination file
            //___________________________________ Module 4 Result _________________________________________
            	fileUtils.isFileExists(constants.DESTINATION_XML_FILE, function handleFileExistsResponse(isExists) {

         			if (isExists && !fileUtils.isFileEmpty(constants.DESTINATION_XML_FILE)) 
        			{
            			console.log("Warning : You are overriding the contents of this xml file");
        			} 
        			module4.writeJsonToXmlFile(constants.DESTINATION_XML_FILE,response);  		

            	}); //Existance of destination file

            }); // End of reading jsonobject.

        });//End of fileUtils.readFile

    });// End of fileUtils.isFileExists 
}
catch (error) {
    console.log("Exception reading source JSON file: " + JSON.stringify(error));
}