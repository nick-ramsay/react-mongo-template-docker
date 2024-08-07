import React from "react";
import keys from "./keys";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    { match: /https\:\/\/react-mongo-template\.herokuapp\.com/, propagatorTypes: ["datadog"] }
  ],
  beforeSend: (event, context) => {
    // collect a RUM resource's response headers
    if (event.type === 'resource' && (event.resource.type === "xhr" || event.resource.type === "fetch") && event.resource.method === "POST") {
      console.log("⬇️ 'console.log(event)' output ⬇️")
      console.log(event);
      console.log("⬇️ 'console.log(context)' output ⬇️")
      console.log(context);
    }
    return true
  },

});

datadogRum.startSessionReplayRecording();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;