const axios = require("axios");
require("dotenv").config(); // Load biến môi trường từ file .env

const serverUrl = process.env.SERVER_URL1;

const sendPing = async () => {
    try {
        const response = await axios.get(serverUrl);
        console.log(
            `[${new Date().toISOString()}] Ping sent:`,
            response.status
        );
    } catch (error) {
        console.error(
            `[${new Date().toISOString()}] Ping failed:`,
            error.message
        );
    }
};

setInterval(sendPing, 10 * 60 * 1000);

sendPing();
