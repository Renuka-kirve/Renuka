var fs = require("fs");
xmltojs=require('xml2js');
var builder = new xmltojs.Builder({rootName:'Students'});
var writeStream = fs.createWriteStream("destination.txt");
fs.readFile('Ass1Source.json', function (error, data) {
    if (error) 
    	return console.error(err);
    else
    {
    	 var jsonData = JSON.parse(data);
         writeStream.write("Id\t|firstName\t|LastName\t|Score");
    	 for(var i=0;i<jsonData.Student.length-1;i++)
    	 {
    	 	for(var j=0;j<jsonData.Student.length-i-1;j++)
    	 	{
    	 		if(jsonData.Student[j].score<jsonData.Student[j+1].score)
    	 		{
    	 			var swap=jsonData.Student[j];
    	 			jsonData.Student[j]=jsonData.Student[j+1];
    	 			jsonData.Student[j+1]=swap;	
    	 		}
			}
			
		}
        var xml = builder.buildObject(jsonData);
        for(var i=0;i<jsonData.Student.length;i++)
    	{
    		writeStream.write("\r\n"+jsonData.Student[i].id+"\t|"+jsonData.Student[i].fName+"\t\t|"+jsonData.Student[i].lName+"\t\t|"+jsonData.Student[i].score+"");
		}
        fs.writeFile('destination.xml',xml,function(error){
            if(error)
                console.log(error);
        });
    }
});


console.log("Successfully written the data in destination.txt file");