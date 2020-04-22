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
    res.render('index.html')
  });

// Sets a listener to port 5001
server.listen(5001, ()=>(console.log('Client connected on port 5001')));