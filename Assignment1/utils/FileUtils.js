/**
 * Module/class which provides bunch of utility methods to perform operations on file.
 *
 * @author Hardik Patel, Mindstix Labs.
 */

// Dependencies.
var fs = require("fs");


var FileUtils = function() {

    // Public functions.
    this.isFileExists = isFileExists;
    this.readFile = readFile;
    
    /**
     * Public function to validate file exists or not.
     *
     * @params filePath - Absolute path of file.
     * @return callback - Boolean indicating file exists or not.
     */
    function isFileExists(filePath, callback) {

    	// Validate file exists or not.
    	fs.exists(filePath, function handleFileExistResponse(isExists) {

    		if(isExists) {
    			return callback(true);
    		}

    		return callback(false);
    	});
    }

    /**
     * Public function to read file contents.
     *
     * @params filePath - Absolute path of file.
     * @return callback - File contents.
     */
    function readFile(filePath, callback) {

    	// Read file contents.
    	fs.readFile(filePath, function handleFileReadResponse(error, response) {

    		if(error) {
    			return callback(error, null);
    		}

    		return callback(null, response);
    	});
    }
}


// Export module.
module.exports = new FileUtils();
