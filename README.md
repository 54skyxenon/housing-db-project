![readme-banner.png](./client/src/assets/topbanner.jpeg)

Max Hayashi and I wrote a full-stack web application to investigate factors affecting housing development in the
Greater Boston area. This is our final project for CS3200: Database Design.

The frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is deployed on Netlify. The backend is written using the Flask micro-framework and deployed on Heroku, connected to a MySQL AWS instance. 

## Installation and Usage

You need to first add the `.env` file containing the secret key and database connection information and then run `source .env` to export the database connection environment variables, in order to run the backend. Just email me or Max asking for it. Also, ensure you are using Python 3 when running the backend. After that, install dependencies with `pip install -r requirements.txt`. Finally, to start the backend server, do `python app.py`.

Our frontend uses the Yarn package manager. To start the frontend server, cd to `client/` and then `yarn start` to run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
