//Ninja Assignment1
/*Problem Statement:
A flat file contains student records in JSON format. Write a program to parse and process these student records.
Requirement1: Write a NodeJS program which can read this source.json file. 
              It will then extract the first name, last name, and score for every student from this JSON file and write each record
              to output file "Destination.txt" in following format.

              Id  | FirstName | LastName | Score
              123 | John      | Doe      | 234
Requirement2: Extend Requirement1 to sort all the students based on their score(Descending order) and write the output in "Destination.txt" file.

Requirement3: Generate xml output in "Destination.xml" file. The sequence of records in the generated XML should be in the descending order 
              of the score. Make sure you use a DOM generation library and do not construct the output XML by simple string concatenations. 
*/

//Importing file I/O system.
//Usually uses require("fs") but for checking existing file is empty or not it is not enough so used extfs 
var fs = require("extfs");

//Importing xml2js(DOM generation library) to convert JSON data into xml
var xmlTojs=require('xml2js');

var jsonData;
try
{
    //Checking whether source file of json exists or not
    fs.exists("Ass1Source.json",function sourceExist(exists) {
        if(exists) //If Ass1Source.json exists.
        {
            readJsonFile(); 
        }
        else //If it does not exists then print appropriate message
            console.log("Source file does not exists");
    });
}
catch(e) {
    console.log(e);
}

//Function that reads Json file and checks if it contains valid json or not
function readJsonFile()
{
    fs.readFile('Ass1Source.json', function jsonFileCallback(error, data) {
        if(error) {
            console.log(error);
        }
        else {
                if(!validateJson(data)) // If Json object inside json file is not valid
                {
                    console.log("Warning : Please check your json data format!!");
                }
                else
                {
                    sortJson();                //Sort json according to score
                    writeJsonToFile();         //Write sorted json into file 
                    writeJsonToXml_File();     //Convert json object into xml and write into xml file
                }
            }
    });
    
}
//Function for checking whether Json is valid or not
function validateJson(JsonStr)
{
    try {
           jsonData = JSON.parse(JsonStr);   
    }
    catch(e) {
            return false;
    }
    return true;
}
//Function for sorting the students according to score
function sortJson()
{
    //jsonData.Student.length calulates the length of Student array in json object
    for(var i=0;i<jsonData.Student.length-1;i++)  
    {
         for(var j=0;j<jsonData.Student.length-i-1;j++)
         {
                if(jsonData.Student[j].score<jsonData.Student[j+1].score)
                {
                    //Swapping the json object in order to set them in descending order according to score
                    var swap=jsonData.Student[j];
                    jsonData.Student[j]=jsonData.Student[j+1];
                    jsonData.Student[j+1]=swap; 
                }
         }
    }
}
//Function for writing the sorted json into destination.txt file in given format
function writeJsonToFile()
{
    fs.exists("Destination.txt",function destinationExist(exists) { //Checks whether destination.txt already exists or not
        if(exists) //If already exists then check whether it is empty or not and give warning 
        {
            if(!fs.isEmptySync('Destination.txt')) { //If file is not empty
                console.log("Warning : You are overriding the contents of this file");
            }
        }
        var writeStream = fs.createWriteStream("Destination.txt");
        writeStream.write("Id\t|firstName\t|LastName\t|Score");
        for(var i=0;i<jsonData.Student.length;i++) //Write json into file 
        {
            writeStream.write("\r\n"+jsonData.Student[i].id+"\t|"+jsonData.Student[i].fName+"\t\t|"+jsonData.Student[i].lName+"\t\t|"+jsonData.Student[i].score+"");
        }
    });
}
//Function to convert json object into xml format and writing it to destination.xml file
function writeJsonToXml_File()
{
    var builder = new xmlTojs.Builder({rootName:'Students'});
    fs.writeFile('Destination.xml',builder.buildObject(jsonData),function xmlError(error){
            if(error) {
                console.log(error);
            }
    });
}