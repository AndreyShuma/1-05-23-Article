const express = require('express');
const mainRouter = require('./router/main');
const main2Router = require('./router/main-2');

const server = express();
console.log('SERVER RUN >>>>>>>');

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');


server.use(express.static(__dirname + '/public'));
server.use(express.json());

server.use('/main', mainRouter);
server.use('/main2', main2Router);

server.listen(3000);
