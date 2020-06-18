![readme-banner.png](./client/src/assets/topbanner.jpeg)

Max Hayashi and I wrote a full-stack web application to investigate factors affecting housing prices in the
Greater Boston area. This is our final project for CS3200: Database Design.

The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the
backend is written using the Django MVC framework, connected to a MySQL AWS instance.

## Installation and Usage
You need to first add the `.env` file containing the secret key and database connection information to run the backend. 
Just email me or Max asking for it. Also, ensure you are using Python 3 when running the backend.

To start the backend server, stay in this directory and then:

### `pip install -r requirements.txt`

Installs the packages needed for the Flask server to start.


To start the frontend server, cd to `client/` and then you can:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. We use this when running `netlify deploy --prod`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)