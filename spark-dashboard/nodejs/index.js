var app = require('express')(); // Express Framework >> Creating an API for our UI 
var http = require('http').Server(app); // 
var io = require('socket.io')(http);
var kafka = require('kafka-node'); // Kafka Node Integration
var HighLevelConsumer = kafka.HighLevelConsumer; // Creates our Consumer at high level
var Offset = kafka.Offset;
var Client = kafka.Client;
var topic = 'orders_ten_sec_data'; // Our topic
var client = new Client('localhost:2181', "worker-" + Math.floor(Math.random() * 10000)); // Zookeeper
var payloads = [{ topic: topic }];
var consumer = new HighLevelConsumer(client, payloads);
var offset = new Offset(client);
var port = 3001; // NodeJS Port

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io = io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

consumer = consumer.on('message', function(message) {
    console.log(message.value);
    io.emit("message", message.value);
});

http.listen(port, function(){
    console.log("Running on port " + port)
});
