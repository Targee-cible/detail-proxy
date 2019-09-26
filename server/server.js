const nr = require('newrelic');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
// app.use(proxy('/api/images', {target: 'http://localhost:3003/'}));
// app.use(proxy('/api/checkout', {target: 'http://localhost:3002/'}));
// app.use(proxy('/api/product', {target: 'http://localhost:3004/'}));
app.use(proxy('/api/', {target: 'ec2-54-153-18-154.us-west-1.compute.amazonaws.com'}));

app.listen(port, () => console.log('listening to port 3000'));
