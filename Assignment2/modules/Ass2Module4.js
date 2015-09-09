/**
 * assignment no - 2 (Module 4).
 *
 * @author Renuka Kirve, Mindstix Labs.
 */

//Dependencies

//Importing js2xmlparser(DOM generation library) to convert JSON data into xml
var js2xmlparser = require("js2xmlparser");

//Importing File I/O System
var fs = require("extfs");

var module4= function() {

 	// Public functions.
    this.writeJsonToXmlFile = writeJsonToXmlFile;

    /**
     * Public function to write jsonobject to xmlfile.
     *
     * @params filePath - Absolute path of file.
     * @return jsonObject - Json object to be written in xml file.
     */
    function writeJsonToXmlFile(filepath,jsonObject)
    {
    	
        var jsonarray=[];
        var jsonObj=new Object();
        for(var i=0;i<jsonObject.students.length;i++) 
        {
             var arrayObj=new Object();
             var idObj=new Object();
             idObj.id=jsonObject.students[i].id;
             var name=jsonObject.students[i].fName+" "+jsonObject.students[i].lName;
             arrayObj['@']=idObj;
             arrayObj.name=name;
             arrayObj.score=jsonObject.students[i].score;
             jsonarray.push(arrayObj);
             
        }
        jsonObj.Student=jsonarray;

        var xmlObject=js2xmlparser("students", jsonObj);
     
        //var returnxml = obj.replace(/<\/?[0-9]{1,}>/g,' ');
    
        fs.writeFile(filepath,xmlObject,function(error){
            if(error) {
                console.log(error);
            }
        });
    }
 }

// Export module.
module.exports = new module4();




