const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Define the paths for the browser to handle and sets the html as the default engine
app.use(express.static(path.join(__dirname, 'src')));
app.set('views', path.join(__dirname, 'src'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Express function for handling the get requisition and Path
app.get('/', (req, res) => {
    res.render('index.html');
  });

/* Sets the connection and returns logs for connected,
Output = 'TRUE' for connection stabilished */
io.on('connect', (socket) => {
    console.log(socket.connected);
    console.log(socket.id);
    // Function for emit the data received from the client
    socket.on('data', (data) => {
        console.log(`Address received, ${data}`);
        socket.broadcast.emit('address', data);
    });
});

// Sets a listener to port 5000
server.listen(5000, ()=>(console.log('Server connected on port 5000')));