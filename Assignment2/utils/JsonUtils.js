/**
 * Module/class which provides bunch of utility methods to perform operations on JSON.
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

var JsonUtils = function() {

    // Public functions.
    this.isValidJson = isValidJson;
    this.isJsonObjectEmpty = isJsonObjectEmpty;
    
    /**
     * Public function to validate JSON is valid or not.
     *
     * @params jsonData - JSON data to be validated.
     * @return boolean - Boolean indicating JSON is valid or not.
     */
    function isValidJson(jsonData) {

        // Validate JSON is null.
        if (jsonData == null) {
            return false;
        };
        // Validate JSON is valid or not.
    	try {
            //JSON.parse(jsonObject);
            JSON.parse(jsonData);
        }
        catch (error) {
            return false;
        }
        
        return true;
    }
    /**
     * Public function to validate JSON is empty or not. (Returns true if empty and false has some data)
     *
     * @params jsonObject - JSON object to be validated.
     * @return boolean - Boolean indicating JSON is empty or not.
     */
    function isJsonObjectEmpty(jsonObject) { 
        
        // Validate JSON is null.
        if (jsonObject == null) {
            return true;
        };

        try {
            for (var key in jsonObject) {
                if (jsonObject.hasOwnProperty(key)) { // if jsonobject has particular key
                    return false;
                }
            }
            return true;
        }
        catch (error) {
            return true;
        }
    }
}
// Export module.
module.exports = new JsonUtils();