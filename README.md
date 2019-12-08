# Node.js Agent Developer Project [![Build Status](https://travis-ci.com/kidc12/Node.js-Agent-Developer-Project.svg?branch=master)](https://travis-ci.com/kidc12/Node.js-Agent-Developer-Project)
Code Written by Javon Kitson :octocat:  

## What is this?
This is NodeJs applcation that does nothing on the webpage, but is meant to show data in the command line for further development. It by default it won't show any data in the terminal except the url status and and request method. When given the argument "data" it will show all the previously named data and the rquest time, number of string objects, ip address, number of modules, and memory used.

## How it works & why I built it
I built this program to be used as a future web appliation and to provide whom ever deploys its with significant information about the application as its being used. It works by doing a number of calculations on the back ends and presenting the user with information one may deem relevant for further developement. The program relies on the usage of logger to log methon, url, status, response-time, and string objects. ID, memory, and module number are computed via hand written code that relies on built in node tools. 

## Setup
```npm install```

## How to run
```npm start```
    
To show data in the terminal use

```npm start data```

## How to deploy
Assuming ones server is already ready to have a node application on it they just need to place the files NOT the folder itself into ones "www" directory or whichever directory your using. The application by defauly uses localhost or 127.0.0.1 and port 3000. You can change these in the www file in the bin directory. When you have the correct port and url setup you can start the program.

If you're already using an apache server I reccomend following this tutorial on how to setup a node application on it. https://www.ionos.com/community/server-cloud-infrastructure/nodejs/set-up-a-nodejs-app-for-a-website-with-apache-on-ubuntu-1604/

## What was used?
*these are just the notable modules*

NodeJS, ExpressJS, Mocha, Chai, Ejs

## Notes
- [x] build the beginnings of a Node.js agent
- [X] The agent will simply have to be configured into the runtime of a Express application and perform some very basic instrumentation.
- [X] APM technology like New Relic

## Requirements 
- [ ] Count how many string objects were created for an API request.
- [X] Instrument the response to include a unique ID
- [X] Explore (2 out of 3) data points specifically:
    - [x] Time the request from start to finish.
    - [X] How much memory does a single page request take?
    - [x] How many modules were loaded?
- [X] Provide an interface that instruments the application to answer the questions above (preferably both to an endpoint, console and log).
- [x] Ideally, the interface is a flag or switch that can be turned on/off as part of the startup of the application.
