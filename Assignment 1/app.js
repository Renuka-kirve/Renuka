/**
 * Entry point for assignment no - 1.
 *
 * @author Renuka Kirve, Mindstix Labs.
 * @author Hardik Patel, Mindstix Labs.
 */

// Dependencies.
var constants = require("./config/constants");
var fileUtils = require("./utils/FileUtils");
var jsonUtils = require("./utils/JsonUtils");
var fs=require("extfs");
var xml2js=require("xml2js");
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
        // Step 2: Read source.json file.
        fileUtils.readFile(constants.SOURCE_JSON_FILE, function handleFileReadResponse(readError, readResponse) {
        
            if (readError) 
            {
                console.log("\n Error reading source JSON file.");
                return;
            }
            console.log("\n Source JSON file 1: " + readResponse);

            parseJsonData=JSON.parse(readResponse);
            
            // Step 3: Validate source.json file.
            if (!jsonUtils.isValidJson(readResponse)) {

                console.log("\n Source JSON file is invalid.");
                return;
            } 
            if (jsonUtils.isJsonObjectEmpty(readResponse)) {

                console.log("\n Source JSON file is empty.");
                return;
            }
            if (!parseJsonData.hasOwnProperty("students")) {

                console.log("\n Source JSON file is not having students records.");
                return;
            }
            // Step 4: Sort JSON data.
            parseJsonData.students.sort(sortSourceJson);
            console.log("\n Sorted source JSON file: " + JSON.stringify(parseJsonData));

            // Step 5: Write JSON to text file.
            writeJsonToFile(parseJsonData);
            
            // Step 6: Write JSON to XML file.
            writeJsonToXml_File(parseJsonData);
        });     
    });
}
catch (error) {
    
    console.log("Exception reading source JSON file: " + JSON.stringify(error));
}
/**
 * Function to sort JSON objects.
 *
 * @params student1 - JSON object of studnet 1.
 * @params student2 - JSON object of studnet 2.
 * @return boolean - Boolean indicating result of comparision.
 */
function sortSourceJson(student1, student2) {
    
    if (student1.score < student2.score) {
        return 1;    
    }
    
    if (student1.score > student2.score) {
        return -1;        
    }
    return 0;
}
//Function for writing the sorted json into destination.txt file in given format
function writeJsonToFile(jsonData)
{
    fs.exists(constants.DESTINATION_TEXT_FILE,function destinationExist(exists) { //Checks whether destination.txt already exists or not
        if(exists && !fs.isEmptySync(constants.DESTINATION_TEXT_FILE)) //If already exists then check whether it is empty or not and give warning 
        {
            console.log("Warning : You are overriding the contents of this file");
        }
        var writeStream = fs.createWriteStream(constants.DESTINATION_TEXT_FILE);
        writeStream.write("Id\t|firstName\t|LastName\t|Score");
        for(var i=0;i<jsonData.students.length;i++) //Write json into file 
        {
            writeStream.write("\r\n"+jsonData.students[i].id+"\t|"+jsonData.students[i].fName+"\t\t|"+jsonData.students[i].lName+"\t\t|"+jsonData.students[i].score+"");
        }
    });
}
//Function to convert json object into xml format and writing it to destination.xml file
function writeJsonToXml_File(jsonData)
{
    var builder = new xml2js.Builder({rootName:'Students'});
    fs.writeFile(constants.DESTINATION_XML_FILE,builder.buildObject(jsonData),function(error){
            if(error) {
                console.log(error);
            }
    });
}