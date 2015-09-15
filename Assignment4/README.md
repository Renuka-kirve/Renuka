# Lab NODE4: Your First HTTP REST API

# Overview

## Objective:

We extend Lab NODE1 and Lab NODE2 in order to allow users to fetch sorted student records over a HTTP REST. Allow users to filter the student records as well.

# Duration:

3 days

# What You Learn Here?

+ Basic Node.js Syntax.
+ Basics of using a Git repository.
+ How to use Node.js modules.
+ How to perform file IO in Node.js.
+ How asynchronous IO and callbacks work in Node.js.
+ Basics of HTTP VERBS and HTTP Headers.
+ Basics of HTTP query strings.
+ MIME Types and Content-Type headers in HTTP

# Requirements
+ Create a new free Git repository in GitHub. Use this to commit your code.
 
+ This Lab session should be done without the use of any framework like Express etc.
 
+ Complete the pre-requisites (Lab NODE1 and Lab NODE2) then proceed with this assignment.
 
+Just like Lab NODE1, you are provided a source.json file that contains student information in a JSON format.

+ Create a HTTP server where a client can submit a HTTP GET request with the following URL:
/students/?q=Jan
 
+ The query string “q” is an optional query parameter in your URL.
 
+ If “q” is not specified in the request then return all records from the source.json file back to the client.
 
+ If “q” is specified as a valid string, then only return records from the source.json where first name or last name matches the specified q parameter (i.e. Substring match, case insensitive). The records must be returned in sorted order; descending sort based on the score.

+ The returned data from your REST endpoint should be either of these formats:
JSON
XML
Plain Text
 
+ Your server should check the “Accept” HTTP header in each request (where the client indicates the format that it “Accepts” or “Desires). Based on that, you should decide to return either a JSON, XML or Plain Text. The sample return data is indicated below:
 
+ Regardless of the filter and return data format, the records must always be returned in sorted order – descending sort based on the score.

# Return JSON Example:
+ MIME: application/json

JavaScript

{
"students": 
	[
		{
			"id": 123,
			"fullName": "John Doe",
			"score": 234
		},
		{
			"id": 124,
			"fullName": "Jane Doe",
			"lName": "Doe",
			"score": 543
		},
		{
			"id": 125,
			"fullName": "Jackie Doe",
			"score": 453
		}
	]
}

# Return XML Example:
+ MIME: application/xml

<students>
 <student id="124">
   <name>Jane Doe</name>
   <score>543</score>
 </student>
 <student id="125">
   <name>Jackie Doe</name>
   <score>453</score>
 </student>
 <student id="123">
   <name>John Doe</name>
   <score>234</score>
 </student>
</students>


# Return Plain Text Example:
+ MIME: text/plain

First Name | Last Name | Score
123 | John | Doe | 234
124 | Jane | Doe | 543
125 | Jackie | Doe | 453

# Definition of Done!

Here is a checklist to help you evaluate the maturity of your own work. Give yourself a +1 for each item done, and -1 for each item not done. What’s your final score then?

+ Git:
   + Did you commit your code to Git regularly during development of this assignment?
   + Did you put proper commit logs with each commit?
Did you make sure to ignore (not commit) the “node_modules” directory to Git?

+ Package JSON:
   + Do you have a well defined package.json for your project?

+ Validations:
   + Do you check if the requested file exists first, before attempting to read that file from the disk?
   + What happens if the client sends an “Accept” header which is unsupported by your code? How do you elegantly deal with it?

+ Code Quality:
   + Is your code neatly formatted and indented?
   + Do all your methods have a method-level comment at the top?
   + Do all your source files have a comment at the top that describes the purpose of this file?
   + Did you validate your code in a JSON Lint? Did you fix the errors that were found by JSON Lint?
   + Did you have a coding guideline document that you followed?
   + Did you get someone else to review your code during development?

+ Testing:
   + Did you identify 25 test cases for this project? How did you systematically record those test cases? XLS?
   + Does your test report identify which test cases pass and which ones fail?

+ Defensive Programming:
   + What happens if a user hits a bad URL (unsupported URL) in your application? Does she see a proper 404 error page?
   + What happens if there is some unexpected internal error in your application? Does she see a proper 500 error page?
   + If your program receives another HTTP VERB (PUT, POST, DELETE) that you do not presently support, what do you return back to the caller? Do you elegantly return an appropriate HTTP error code?

+ Business Logic:
   + Do you perform a case sensitive or case insensitive substring match?

+ Product Maturity:
   + Does your form accept multi-lingual inputs? Did you test it with say Japanese or Swedish characters in the input?
   + What kind of URL routes have you defined? Are they simple to remember / user friendly?
 