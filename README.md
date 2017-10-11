# nginx-elb-redirect-to-ssl
small POC to configure nginx (running under AWS Elastic Beanstalk) to redirect non-ssl traffic to ssl, and remove server tokens

## pre-reqs
- install [node and npm](https://www.npmjs.com/get-npm) ( if you want to run locally )
- install [aws eb cli](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html), and add it to your $PATH ( if you want to push/deploy from the CLI to AWS )
- have an AWS account with a private key already in your `~/.ssh/` folder ( if you want to push/deploy from the CLI to AWS )

## running in AWS
1. `eb init`
1. `eb create my-env` # could replace my-env with something like 'staging' or 'pre-prod'

NOTE: you probably want to remove the 'node_modules' before pushing to AWS; the AWS container will automatically download/install the required node modules based on your package.json.

## running locally
1. npm install # downloads/installs node_modules
1. node app.js
1. open a browser ( or curl ) and point to http://localhost:3000/
1. optionally, to specify a different port you can run with `PORT=8081 node app.js`
1. optionally, for automatic restarts while developing you can use nodemon, as in `PORT=8083 nodemon app.js`
