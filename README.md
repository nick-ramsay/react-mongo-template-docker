# MERN Sandbox

Please use the following steps to start this application:

1. Create a RUM application in Datadog. Take note of the `applicationId` and `clientToken` values for this RUM application.
2. Copy the content of the `docker-compose-example.yml` file into a new file named `docker-compose.yml`
3. In the new `docker-compose.yml`, replace `<YOUR_RUM_APPLICATION_ID>` with your own `applicationId` value. Then, replace `<YOUR_RUM_CLIENT_TOKEN>` with your own `clientToken`. Finally, replace `<YOUR_DATADOG_API_KEY>` with one of your own Datadog API keys.
4. Run the following command to build the Docker images: `docker compose -f docker-compose.yml build`.
5. Finally, run the `docker compose -f docker-compose.yml up` command to start the application.

Once you've done this, try entering some new messages and deleting some messages. You should see RUM Sessions getting generated for your activity. You should also see that the `xhr` RUM Resource Events for your activity are getting correlated to backend, NodeJS traces. 
