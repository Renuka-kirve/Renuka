# Lab NODE3: Your Very First HTTP Server

# Overview

## Objective:

Create your first Node.js powered HTTP server that let’s users to download image files.

# Duration:

2 days

# What You Learn Here?

+ Basic Node.js Syntax.
+ Basics of using a Git repository.
+ How to use Node.js modules.
+ How to perform file IO in Node.js.
+ How asynchronous IO and callbacks work in Node.js.
+ Basics of HTTP VERBS and HTTP Headers.

# Requirements

+ Create a new free Git repository in GitHub. Use this to commit your code.
 
+ Create a HTTP Web Server in Node.js that accepts only HTTP GET requests from the client.
 
+ The request URL will contain the filename of the requested image by the client. The HTTP server should read the image file from the disk (from a standard directory) and then return that image.
 
+ If a bad filename has been provided by the client in the request, your HTTP server should return a proper HTTP 400 error message to the client.
 
+ This Lab session should be done without the use of any framework like Express etc.

# Definition of Done!

Here is a checklist to help you evaluate the maturity of your own work. Give yourself a +1 for each item done, and -1 for each item not done. What’s your final score then?

+ Git:
    + Did you commit your code to Git regularly during    development of this assignment?
    + Did you put proper commit logs with each commit?
    + Did you make sure to ignore (not commit) the “node_modules” directory to Git?

+ Package JSON:
    + Do you have a well defined package.json for your project?

+ Validations:
    + What kind of defensive programming / validation checks have you incorporated?
    + Do you check if the requested file exists first, before attempting to read that file from the disk?

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
    + Which desktop browsers did you test your server in?
Did you test your app on a tablet device?

+ User Experience:
    + Are validation errors neatly shown to the users?
    + Did you run a spell check on all your text, messages and errors shown to the user?

+ Defensive Programming:
    + What extent of validations and error handling have you incorporated?
    + What happens if a user hits a bad URL (unsupported URL) in your application? Does she see a proper 404 error page?
    + What happens if there is some unexpected internal error in your application? Does she see a proper 500 error page?
What happens if your server receives a request for an unsupported (non image) file type?

+ Product Maturity:
    + Did you read about the MIT license? Does your code and GitHub repository include a reference to the MIT license as expected?
    + What kind of URL routes have you defined? Are they simple to remember / user friendly?