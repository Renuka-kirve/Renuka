/**
 * assignment no - 2 (Module 3).
 *
 * @author Renuka Kirve, Mindstix Labs.
 */
 
 // Dependencies.
var fs = require("fs");

var module3 = function() {

    // Public functions.
    this.writeJsonToFile = writeJsonToFile;

    /**
     * Public function to write jsonobject of file.
     *
     * @params filePath - Absolute path of file.
     * @params jsonObject - jsonObject to write in file.
     */
    function writeJsonToFile(filepath,jsonObject)
    {
        var fileStr="Id\t|firstName\t|LastName\t|Score \n";
        for(var i=0;i<jsonObject.students.length;i++) 
        {
            fileStr=fileStr+jsonObject.students[i].id+"\t|"+jsonObject.students[i].fName+"\t\t|"+jsonObject.students[i].lName+"\t\t|"+jsonObject.students[i].score+"\n";
        }
        fs.writeFile(filepath,fileStr,function txtFileError(error){
            if(error) {
                console.log(error);
            }
            console.log("JsonObject successfully written to specified txt file");
        });
    }
} 
// Export module.
module.exports = new module3();










