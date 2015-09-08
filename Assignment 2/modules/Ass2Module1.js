/**
 * assignment no - 2 (Module 1).
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

var fs = require("fs"); 

var module1 = function() {
    
    // Public functions.
    this.returnJsonObject = returnJsonObject;
    
    /**
     * Public function to return the jsonobject of jsonfile.
     *
     * @params filePath - Absolute path of file.
     * @return callback - File content.
     */
    function returnJsonObject(filepath, callback) {

        // Read file contents.
        fs.readFile(filepath, function handleFileObjectResponse(error, response) {

            if(error) {
                return callback(error, null);
            }
            return callback(null, JSON.parse(response));
        });
    }
}


// Export module.
module.exports = new module1();

