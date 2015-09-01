
ReadMe file for Ninja Assignment 1 for NodeJs. August 31st, 2015 
===================================================

Description of this Assignment:

   - A flat file contains student records in JSON format. Write a program to parse and process these student records. 
     This assignment involves File IO, Handling of JSON Strings, and XML Documents in Node.js.

   - Requirement 1:
     	      
	      Write a NodeJS program which can read this source.json file. 
              It will then extract the first name, last name, and score for every student from this JSON file and write each record
              to output file "Destination.txt" in following format.

              Id  | FirstName | LastName | Score
              123 | John      | Doe      | 234
	      124 | Jane      | Doe      | 543
	      125 | Jackie    | Doe      | 453
   - Requirement 2:
             
             Extend Requirement1 to sort all the students based on their score(Descending order) and write the output in "Destination.txt" file.
             Output should be written in the same format given in requirement 1.

   - Requirement 3:
             
             Generate xml output in "Destination.xml" file. The sequence of records in the generated XML should be in the descending order 
             of the score. Make sure you "use a DOM generation library" and do not construct the output XML by simple string concatenations.

=================================================== 

Files are as follows:

Assign1.js : Nodejs code.
Ass1Source : source json file.
Destination.txt : Output text file containing sorted output.
Destination.xml : xml output file.

===================================================

Flow of Program:

  - It first imports the modules whatever needed (Here I have imported "extfs" and "xml2js").
  
  - Program flow starts with checking whether the source file of json exists or not.
  
  - If source file exists then it will go into the function readJsonFile() otherwise it will give message that "Source file does not exists".
  
  - Now considering the scenario where source file exists it is entering into function readJsonFile()
  
  - Here, firstly it checks whether the source file contains valid json object or not.
  
  - If it doesn't contain valid json then it gives meassage as " Please check your json data format".
  
  - Otherwise it moves to the tasks specified.
  
  - In that the first one is sortJson() function. In this function students gets sorted based on their scores in descending order.
  
  - After that it goes into function writeJsonToFile() in which it first checks whether the destination file exists or not
  
  - If destination file already exists then it checks whether it is empty or not, if not then it prints warning "You are overriding the contents of the file."
  
  - After that it creates the writestream for the destination.txt file.
  
  - Traverses the JsonObject and writes it into the destination.txt file.
  
  - Then it enters into the function writeJsonToXml_File() where it first sets the rootName for xml DOM.
  
  - And then inserts the json data by converting it into xml format into Destination.xml file.

=================================================== 