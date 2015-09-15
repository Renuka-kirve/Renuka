/**
 * Module/class which defines constants to be used globally in entire assignment.
 * This constants will not be modified at run-time.
 *
 * @author Renuka Kirve, Mindstix Software Labs.
 */
var path = require("path");

var Constants = function() {
    
    // Assignment home directory path.
    var ASSIGNMENT_HOME = path.join(__dirname, '..');

    this.SOURCE_JSON_FILE = ASSIGNMENT_HOME + "/source/source.json";
   
}

// Export module.
module.exports = new Constants();