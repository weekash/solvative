const WebSocket = require('ws');

const wss = new WebSocket.Server({ noServer: true });

const broadcast = (message) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
};

module.exports = { wss, broadcast };
