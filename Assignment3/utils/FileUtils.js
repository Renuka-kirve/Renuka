/**
 * Module/class which provides bunch of utility methods to perform operations on file.
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

// Dependencies.
var fs = require("fs");


var FileUtils = function() {

    // Public functions.
    this.readFile = readFile;
  
    /**
     * Public function to read image file.
     *
     * @params filePath - Absolute path of file.
     * @return callback - Image file.
     */
    function readFile(filePath, callback) {

    	// Read file contents.
    	fs.readFile(filePath, function handleimageFileResponse(error, response) {

    		if(error) {
    			return callback(error, null);
    		}

    		return callback(null, response);
    	});
    }
}


// Export module.
module.exports = new FileUtils();
