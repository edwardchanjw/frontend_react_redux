React, Redux and Webpack 2 Starter
---

#Step to setup from scratch

##1. Install Dependencies
    npm init

    yarn add webpack@beta --dev
    yarn add webpack@2.2.0 --dev

    yarn add react react-dom
    yarn add redux react-redux redux-thunk
    yarn add firebase
    yarn add babel-loader babel-core babel-preset-react babel-preset-es2015 --dev

    mkdir src dist;
    

##2. Setup Webpack v2

Normally we will Setting up webpack.config.js but we can setup ES6 config file with webpack.config.[loader].js .
Here is babel, based on the issue here, you got documentation on issue list, software developer have no life other than reading other than issue list:
https://github.com/webpack/webpack/issues/1403.

Nobody have time for that, but we do. Wasting time build to fulfill Web compatibility, then again the compatibility might no get used. (You might not need redux)

See webpack.dev.babel.js and webpack.prod.babel.js


##3. Install concurrently and any HTTP like simpleHTTPServer from python

Setup npm script to launch the apps:

    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "./node_modules/.bin/webpack --config webpack.prod.babel.js",
        "start": "yarn install && concurrently --kill-others \"npm run start-watch\" \"npm run start-server\"",
        "start-server": "cd dist && python -m SimpleHTTPServer 5465",
        "start-watch": "./node_modules/.bin/webpack --config webpack.dev.babel.js"
    },


##4. Run setup scripts for various mode

- npm start for watch mode in development.
- npm build for bundling for project



