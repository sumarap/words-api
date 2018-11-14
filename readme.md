2018-11-01: Instructions for creating a serverless app for AWS Lambda

##############################################################################
1) Create project folder
2) cd to folder
3) Create nodejs project
    npm init -y
4) Create serverless project
    sls -t aws-nodejs
5) Create git project
    git init
6) Modify serverless.yml 
    change service name (words)
    change function name (getWord)
    uncomment/change events section (http)
    uncomment/change include section (I added utils folder)
7) Modify handler.js
    I added the callback parameter (third after 'event' and 'context')
    I removed the return and instead, assigned that return value to the
    const 'response'.
    I added the callback function call: callback(null, response);
8) At this point I test that I get a response, but testing locally:
    sls invoke local -f getWord
    If I get my 'response' message, everything is working.
9) At this point I would check in my changes to git.
    I also might think about create a feature branch to work in.
    If anything breaks I can always go back to this point (master).
10) Using "sls invoke local" is great for just quick testing, but if 
    you want to test 'routes' you can install serverless-offline, that will
    run a local server that will respond to your route requests (via postman)
11) Install serverless-offline:
    npm install --save-dev serverless-offline
12) Update serverless.yml to include that new plugin.
    Just below the service entry in serverless.yml, I put the plugins section:
    plugins:
      - serverless-offline
13) Instead of using express to create routes in a node js app, we'll use
    AWS 

  
