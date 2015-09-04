/**
 * Module/class which defines constants to be used globally in entire assignment.
 * This constants will not be modified at run-time.
 *
 * @author Hardik Patel, Mindstix Software Labs.
 */


var path = require("path");


var Constants = function() {
    
    // Assignment home directory path.
    var ASSIGNMENT_HOME = path.join(__dirname, '..');

    this.SOURCE_JSON_FILE = ASSIGNMENT_HOME + "/source/source.json";
    this.DESTINATION_TEXT_FILE = ASSIGNMENT_HOME + "/destination/destination.txt";
    this.DESTINATION_XML_FILE = ASSIGNMENT_HOME + "/destination/destination.xml";
}


// Export module.
module.exports = new Constants();