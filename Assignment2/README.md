# Lab NODE2: Modularizing Your Node.js Code

# Overview

## Objective:

Create your own Node.js modules. Extend the Lab Node1 program to make sure everything is nicely wrapped-up into modules.

# Duration:

3 days

# What You Learn?

+ The basics  Version Control and Git.
+ Basic syntax of Node.js.
+ Concepts of creating and using modules in Node.js
 

## Requirements:
 

+ Create a new free Git repository in GitHub. Use this to commit      your code.

+ Wrap your entire Lab Node1 as a reusable Node.js module.
Modularize your implementation further (Lab Node1) by creating Node.js modules for the specific tasks:

+ Module 1: Reading a specified JSON file and returning the JSON    		 object.
+ Module 2: Extracting a sorted result from a given JSON object.
+ Module 3: Writing the given sorted result into a target file 			 in a plain text format.
+ Module 4: Writing the given sorted result into a target file 			 in a XML format.
 

## Definition of Done!

Here is a checklist to help you evaluate the maturity of your own work. Give yourself +1 for each item done, and -1 for each item not done. What’s your final score then?

+ Git:
  + Did you commit your code to Git regularly during development     	of this assignment?
  + Did you put proper commit logs with each commit?
  + Did you make sure to ignore (not commit) the “node_modules”                                     	directory to Git?

+ Code Quality:
   + Is your code neatly formatted and indented?
   + Is your code refactored into a few methods having a clear     interface and responsibility?
   + Do all your methods have a method-level comment at the top?
Does your source file have a class-level comment at the top?
Did you check your code in a JSLint? Did you fix the errors that were found?
   + Did you have a coding guideline document that you followed?
Did you get someone else to review your code during development?


+ Testing:
   + Did you identify 25 test cases for this program? How did you record those test cases? XLS?
   + Does your test report identify which test cases pass and which ones fail?


+ User Experience:
   + Does your program print the source file and destination file names for the information of the user?
   + Are validation errors or any data errors neatly shown to the users?
   + Did you run a spell check on all your text, messages and errors shown to the user?


+ Defensive Programming:
   + Does your code check if the source file actually exists?
   + Does your code check if the destination file already exists? 
   + What do you do if the destination already exists?
   + If you are overwriting the destination file, are you showing a warning message to the user accordingly?
   + Does your code check if the destination directory is writeable?
   + What does your program do if the destination file cannot be created / written? Does it elegantly fail with an error?


+ Product Maturity:
   + Does your program work with multi-lingual inputs? Did you test it with say Japanese or Swedish characters in the input JSON file?
   + Did you read about the MIT license? Does your code and GitHub repository include a reference to the MIT license as expected?