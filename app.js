const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: '0.0.0.0', routes: { cors: true } });

const io = require('socket.io')(server.listener);

io.on('connection', (socket) => {
	socket.on('dimming', (dimming) => {
		console.log(dimming);
	});
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
