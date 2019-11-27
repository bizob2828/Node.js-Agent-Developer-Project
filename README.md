# Node.js Agent Developer Project [![Build Status](https://travis-ci.com/kidc12/Node.js-Agent-Developer-Project.svg?branch=master)](https://travis-ci.com/kidc12/Node.js-Agent-Developer-Project)
Code Written by Javon Kitson :octocat:  

## Purpose


## How it works


## Setup
```npm install```

## How to run
```npm start```

## What was used?
NodeJS, ExpressJS, New Relic

## Notes
- [ ] build the beginnings of a Node.js agent
- [ ] The agent will simply have to be configured into the runtime of a Express application and perform some very basic instrumentation.
- [ ] APM technology like New Relic

## Requirements 
- [ ] Count how many string objects were created for an API request.
- [ ] Instrument the response to include a unique ID
- [ ] Explore (2 out of 3) data points specifically:
    - [ ] Time the request from start to finish.
    - [ ] How much memory does a single page request take?
    - [ ] How many modules were loaded?
- [ ] Provide an interface that instruments the application to answer the questions above (preferably both to an endpoint, console and log).
- [ ] Ideally, the interface is a flag or switch that can be turned on/off as part of the startup of the application.

### Additional Requirements

- [ ] Unit tests
- [ ] amazing README
    - what you built ( how it works)
    - why you built it (Purpose)
    - how to deploy it (Setup)
    - how to use it (How to run)

### Bonus
- [ ] Show metrics on the page or a separate app/webpage