# react-mongo-template
### Introduction
### Prerequisites
* Create a [GitHub](https://github.com/) account
* Install [Git](https://git-scm.com/) on your laptop
* Install a code editor on your laptop such as [Visual Studio](https://code.visualstudio.com/) or [Sublime](https://www.sublimetext.com/)
* Install [Node.js](https://nodejs.org/en)
* Install [Mongo DB Community Edition](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition)
* Start [Mongo DB Community Edition](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/#run-mongodb-community-edition)
* Install [Mongo Compass](https://www.mongodb.com/products/compass)

### Installation Instructions
1. Open your terminal and navigate to the directory in which you would like this application to be located. Run the following command to clone the repository on your local machine: `git clone https://github.com/nick-ramsay/react-mongo-template.git`
2. Navigate to Datadog and create a new RUM application named `react-mongo-template`: https://app.datadoghq.com/rum/application/create. Once created, take note of the `clientToken` and `applicationId` values generated for the application.
3. Create `.env` file in the `react-mongo-template` root directory. Copy the existing content of the `.env-example` file into your new `.env` file. This `MONGO_URI` configuration will server as the path to the local MongoDB database.
4. Navigate to the `client` directory. Create a new `.env` file. Copy the existing content of the `.env-example` file (also in the `client` directory) into your new `.env` file.
5. In your new `.env` file, replace the `<applicationId from Datadog RUM Application>` and `<clientToken from Datadog RUM Application>` values with the `applicationId` and `clientToken` values, respectively, from your Datadog RUM application.
6. Open a terminal in the `react-mongo-template` root directory. Run the `npm install` command to install all necessary [npm packages](https://www.npmjs.com/).
7. Run the `npm start` command to start up the application. Once the application is successfully started, open `localhost:3000` on your browser to begin using the application.
