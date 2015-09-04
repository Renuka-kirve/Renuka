# Lab NODE1: Your First Node.js Program.

# Overview

## Objective:

A flat file contains student records in JSON format. Write a program to parse and process these student records. This lab session involves File IO, Handling of JSON Strings, and XML Documents in Node.js.

## Duration:

2-3 days

## What You Learn?

+ Software Revision Control Basics. Basics of Git.
+ Basic Javascript and Node.js Syntax.
+ JSON Basics.
+ XML Basics.
+ Concept of Callbacks in Node.js.
+ How to perform File IO Operations in Node.js.
+ How to process JSON strings in Node.js.
+ How to generate XML documents in Node.js.

## Requirements: Part 1:

+ Create a new (free) Git repository in GitHub. Use this repository to commit all the code that you write in this lab session.
+ Assume, there is a JSON file (source.json) that contains student records along with scores of each student such as:

	{
		"students": 
		[
			{
				"id": 123,
				"fName": "John",
				"lName": "Doe",
				"score": 234
			},
			{
				"id": 124,
				"fName": "Jane",
				"lName": "Doe",
				"score": 543
			},
			{
				"id": 125,
				"fName": "Jackie",
				"lName": "Doe",
				"score": 453
			}
		]
	}

+ Write a NodeJS program which can read this source.json file. It will then extract the first name, last name, and score for every student from this JSON file.
+ The program should write each record to a output file (destination.txt) in the following format:

Student ID   | First Name    | Last Name    | Score
-------------|---------------|--------------|-----------
123          | John          | Doe          | 234
124          | Jane          | Doe          | 543
125          | Jackie        | Doe          | 453

+ Publish this code to GitHub under the MIT License.

## Requirements: Part 2:

+ We extend the Part 1 to  sort all the students based on their score (descending sort).
+ The program should write the sorted output to the destination.txt file as follows:

Student ID   | First Name    | Last Name    | Score
-------------|---------------|--------------|-----------
124          | Jane          | Doe          | 543
125          | Jackie        | Doe          | 453
123          | John          | Doe          | 234

## Requirements: Part 3:

+ We extend the Part 2 to generate an XML output in the destination.xml file as follows:

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

+ Note the sequence of records in the generated XML should be in the descending order of the score.
+ Make sure you use a DOM generation library and do not construct the output XML by simple string concatenations. The intent here is to learn to use a DOM generation library.

## Package Your Work

+ Commit your code to GitHub.
+ Write a README.txt for your project and commit that as well.
+ As a Sprint demo / completion, you need to record a screencast where you describe the problem definition and showcase your work.

## Definition of Done (DoD)

It is very important to have a DoD for everything that you do. Here is a sample checklist to help you evaluate the maturity and completeness of your own work. Give yourself +1 for each item done, and -1 for each item not done. What’s your final score going to be?

+ Git:
  + Did you commit your code to Git regularly during this lab session?
  + Did you put proper commit logs with each commit to Git?
  + Did you make sure to ignore (not commit) the “node_modules” directory to Git?

+ Code Quality:
  + Did you have a coding guideline document that you followed?
  + Is your code neatly formatted and indented?
  + Is your code refactored into a few methods that a clear interface / responsibility each?
  + Do all your methods have a method-level comment at the top?
  + Does your source file have a class-level comment at the top?
  + Did you get someone else to review your code during development?
  + Did you validate your code in a JSLint? Did you fix the errors that were found?

+ User Experience:
  + Does your program print the source file and destination file names to assist the user?
  + Are validation errors or any data-format errors neatly shown to the users?
  + Did you run a spell check on all your text, messages and errors shown to the user?

+ Validations and Defensive Programming:
  + Does your code check if the source file actually exists?
  + Did you check if the source file has a valid JSON? How does your program behave if the source file does not have a valid JSON?
  + Did you check if the source file has the expected “keys” within the JSON? How does your program behave if any expected key is missing?
  + Does your code check if the destination file already exists? What do you do if the destination already exists?
  + If you are overwriting the destination file, are you showing a warning message to the user accordingly?
  + Does your code check if the destination directory is writeable?
  + What does your program do if the destination file cannot be created / written? Does it elegantly fail with an error?

+ Testing:
  + Did you identify “at least” 25 test cases for this program? How did you record those test cases? XLS? (See some examples below).
  + Does your test report identify which test cases pass and which ones fail?

+ Product Maturity:
  + Does your program work with multi-lingual input text? Did you test it with say Japanese or Swedish characters in the input JSON?
  + Did you read about the MIT license?
  + Does your code and GitHub repository include a reference to the MIT license as expected?

## Test Scenarios

How does your program behave if…

+ It is unable to find / read the source file?
+ If the source file does not have a JSON string in it?
+ If the source file contains JSON, but is not in the expected structure?
+ If certain keys are missing in the student records (say, score is missing)?
+ If you are unable to write to the destination file due to lack of write permissions?
+ If the source file has a very, very, large number of records. Say a million records? Does your program still function as expected?
+ If your source file has non-english characters?

## Points to Ponder / Interview Questions

+ Is Node.js a programming language?
+ How do you install Node.js? Can it run on any Operating System?
+ How is Node.js different from JavaScript running in a browser?
+ What is JSON?
+ How do you check if a JSON is a valid (i.e. well formed)? Did you find any online tools to validate JSON? How about tools to neatly format your JSON?
+ What is XML?
+ What are the main differences between JSON and XML? Which one would you prefer and why?