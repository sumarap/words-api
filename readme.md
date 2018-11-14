## Instructions for creating a serverless app for AWS Lambda (18-11-01)

1. Install serverless framework. You can install it globally and not have to deal with it again.
   npm install -g serverless
1. Setup the credentials for serverless framework (this is also globally, not per project)
   sls config credentials --provider aws --key kdfjsldad --secret dkghslalb --profile aws-user-name

1. Create project folder
1. cd to folder
1. Create nodejs project
   1. npm init -y
1. Create serverless project
   - sls -t aws-nodejs
1. Create git project
   - git init
1. Modify serverless.yml
   - change service name (words)
   - change function name (getWord)
   - uncomment/change events section (http)
   - uncomment/change include section (I added utils folder)
1. Modify handler.js
   - Added the callback parameter (third after 'event' and 'context')
   - Removed the return and instead, assigned that return value to the const 'response'.
   - Added the callback function call: callback(null, response);
1. At this point I test that I get a response, but testing locally:
   - sls invoke local -f getWord
   - If I get my 'response' message, everything is working.
1. At this point I would check in my changes to git.
   - Also might think about create a feature branch to work in.
   - If anything breaks I can always go back to this point (master).
1. Using "sls invoke local" is great for just quick testing, but if
   - You want to test 'routes' you can install serverless-offline, that will
   - Run a local server that will respond to your route requests (via postman)
1. Install serverless-offline:
   - npm install --save-dev serverless-offline
1. Update serverless.yml to include that new plugin.
   - Just below the service entry in serverless.yml, I put the plugins section:
   - plugins:
     - serverless-offline
1. Instead of using express to create routes in a node js app, we can use AWS. In the yaml (serverless.yml), we can define routes, under the events section (path and method).
1. Now we can run serverless offline, and test it before deploying to AWS. We can use Postman to test our changes locally. Setup a server locally:
   - sls offline
   - Test different routes with Postman.
