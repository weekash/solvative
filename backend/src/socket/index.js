const WebSocket = require('ws');
const {server} = require("../server")
const wss = new WebSocket.Server({ port: 8000 });

const broadcast = (message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
};

module.exports = { wss, broadcast };
