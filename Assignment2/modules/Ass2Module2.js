/**
 * assignment no - 2 (Module 2).
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

var module2= function() {

    // Public functions.
    this.sortJsonObject = sortJsonObject;

    /**
    * Function to sort JSON objects.
    *
    * @params student1 - JSON object of studnet 1.
    * @params student2 - JSON object of studnet 2.
    * @return boolean - Boolean indicating result of comparision.
    */
    function sortJsonObject(student1 , student2)
    {
        if (student1.score < student2.score) {
            return 1;    
        }
        if (student1.score > student2.score) {
            return -1;        
        }
        return 0;
    }

}

// Export module.
module.exports = new module2();











