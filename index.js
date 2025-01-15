const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 4000 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(`received: ${message}`)
    ws.send(message) // Echo the message back to the client
  })
})
