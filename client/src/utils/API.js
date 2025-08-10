import axios from "axios";

const apiURL = navigator.userAgent.includes("androidWebview") ? 'http://10.0.2.2:3001':'http://localhost:3001';

export default {
    createMessage: function (message, created_date) {
        return axios({ method: "post", url: apiURL + "/api/react-mongo-template-docker/create-message", data: { message, created_date } });
    },
    findAllMessages: function () {
        return axios({ method: "post", url: apiURL + "/api/react-mongo-template-docker/find-all-messages" });
    },
    deleteOneMessage: function (messageID) {
        return axios({ method: "post", url: apiURL + "/api/react-mongo-template-docker/delete-one-message", data: { messageID } });
    }
};