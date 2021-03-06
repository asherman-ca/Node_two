import config from './config';
// import apiRouter from './api';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

// this will look at the views directory for an index file
server.set('view engine', 'ejs');

server.get(['/'], (req, res) => {
  res.render('index');
});

// server.use('/api', apiRouter);
// server.use(express.static('public'));
// server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(__dirname + '/public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});