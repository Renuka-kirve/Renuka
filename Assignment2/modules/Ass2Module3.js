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
        var writeStream = fs.createWriteStream(filepath);
        writeStream.write("Id\t|firstName\t|LastName\t|Score");
        for(var i=0;i<jsonObject.students.length;i++) //Write json into file 
        {
            writeStream.write("\r\n"+jsonObject.students[i].id+"\t|"+jsonObject.students[i].fName+"\t\t|"+jsonObject.students[i].lName+"\t\t|"+jsonObject.students[i].score+"");
        }
        console.log("JsonObject successfully written to specified txt file");
    }
} 
// Export module.
module.exports = new module3();










