Max Hayashi and I wrote a full-stack web application to investigate factors affecting housing prices in the
Greater Boston area. This is our final project for CS3200: Database Design.

The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the
backend is written using the Django MVC framework, connected to a MySQL AWS instance.

## Installation and Usage

To start the frontend server, cd to `client/` and then you can:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

To start the backend server, stay in this directory and then:

### `pip install -r requirements.txt`

Installs the packages needed for the Django server to start.