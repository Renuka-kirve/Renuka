/**
 * Entry point for assignment no - 1.
 *
 * @author Hardik Patel, Mindstix Software Labs.
 * @author Renuka Kirve, Mindstix Labs.
 */

// Dependencies.
var constants = require("./config/constants");
var fileUtils = require("./utils/FileUtils");
var jsonUtils = require("./utils/JsonUtils");
var js2xmlparser = require("js2xmlparser");

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
/*Function for writing the sorted json into destination.txt file in given format

  @param jsonData - Json object to be written in txt file
*/
function writeJsonToFile(jsonData)
{
    var fileStr="Id\t|firstName\t|LastName\t|Score \n";
    for(var i=0;i<jsonData.students.length;i++) 
    {
        fileStr=fileStr+jsonData.students[i].id+"\t|"+jsonData.students[i].fName+"\t\t|"+jsonData.students[i].lName+"\t\t|"+jsonData.students[i].score+"\n";
    }
    fs.writeFile(constants.DESTINATION_TEXT_FILE,fileStr,function txtFileError(error){
        if(error) {
            console.log(error);
        }
        console.log("JsonObject successfully written to specified txt file");
    });
}
/*Function to convert json object into xml format and writing it to destination.xml file
    
    @param jsonData - Json object to be written in xml file
*/
function writeJsonToXml_File(jsonData)
{
    var jsonarray=[];
    var jsonObj=new Object();
    for(var i=0;i<jsonData.students.length;i++) 
     {
             var arrayObj=new Object();
             var idObj=new Object();
             idObj.id=jsonData.students[i].id;
             var name=jsonData.students[i].fName+" "+jsonData.students[i].lName;
             arrayObj['@']=idObj;
             arrayObj.name=name;
             arrayObj.score=jsonData.students[i].score;
             jsonarray.push(arrayObj);
             
     }
     jsonObj.Student=jsonarray;

     var xmlObject=js2xmlparser("students", jsonObj);
     
     //var returnxml = obj.replace(/<\/?[0-9]{1,}>/g,' ');
    
    fs.writeFile(constants.DESTINATION_XML_FILE,xmlObject,function(error){
            if(error) {
                console.log(error);
            }
    });
}