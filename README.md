# MERN Sandbox

## Getting Started

**NOTE:** If you're a Datadog employee, please reference the following internal documentation for detailed guidance on this sandbox: [Integrate Datadog on a MERN Application](https://datadoghq.atlassian.net/wiki/x/ygV9l)

Please use the following steps to start this application:

1. Create a RUM application in Datadog. Take note of the `applicationId` and `clientToken` values for this RUM application.
2. Copy the content of the `docker-compose-example.yml` file into a new file named `docker-compose.yml`
3. In the new `docker-compose.yml`, replace `<YOUR_RUM_APPLICATION_ID>` with your own `applicationId` value. Then, replace `<YOUR_RUM_CLIENT_TOKEN>` with your own `clientToken`. Finally, replace `<YOUR_DATADOG_API_KEY>` with one of your own Datadog API keys.
4. Run the following command to build the Docker images: `docker compose -f docker-compose.yml build`.
5. Finally, run the `docker compose -f docker-compose.yml up` command to start the application.

Once you've done this, try entering some new messages and deleting some messages. You should see RUM Sessions getting generated for your activity. You should also see that the `xhr` RUM Resource Events for your activity are getting correlated to backend, NodeJS traces. 

## Uploading Source Maps

To upload source maps, you'll need to exec into your `client` container and run the source map uploads. Please use the following steps to do so:

1. Run `docker ps` command to find the name and ID of the container
2. Exec into the container with the following `docker exec -it <container-name-or-id> bash`
3. Run the following command to upload the source maps
```
export DATADOG_API_KEY=<YOUR_DATADOG_API_KEY>

datadog-ci sourcemaps upload ./build/static/js \
  --service=react-mongo-template \
  --release-version=<APPLICABLE_VERSION_OF_YOUR_APPLICATION> \
  --minified-path-prefix=http://localhost:3000/static/js
```

4. To stop the application's container, run the following command: `docker stop <container-name-or-id>`

5. To remove the application's container, run the following command: `docker rm <container-name-or-id>`

8. To delete the Docker image you created, first run `docker images` to find the `IMAGE ID`. Then, run `docker rmi <IMAGE_ID>` to delete the specified image.
