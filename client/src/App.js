import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import keys from "./keys";
import "./App.css";

import Home from "../src/pages/Home/Home";

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: keys.ddrum.react_rum_application_id,
  clientToken: keys.ddrum.react_rum_client_token,
  site: 'datadoghq.com',
  service: 'react-mongo-template',
  env: 'staging',
  version: '1.0.25',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 100,
  traceSampleRate: 100,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'mask-user-input',
  //allowedTracingUrls: ["http://localhost:3001/", "https://react-mongo-template.herokuapp.com/"],
  /*allowedTracingUrls: [
    { match: [/http:\/\/localhost:3001/, /https\:\/\/react-mongo-template\.herokuapp\.com/], propagatorTypes: ["datadog"] }
  ]*/
  allowedTracingUrls: [
    { match: /http:\/\/localhost:3001/, propagatorTypes: ["datadog"] },
    { match: /https:\/\/react-mongo-template\.herokuapp\.com/, propagatorTypes: ["datadog"] }
  ],
  // beforeSend: (event, context) => {
  //   // collect a RUM resource's response headers
  //   return true
  // },

});

datadogRum.startSessionReplayRecording();


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    }
  ]);

 return(
    <RouterProvider router={router} />
  );
}

export default App;