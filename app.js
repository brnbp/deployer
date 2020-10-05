const express = require('express');
const bodyParser = require('body-parser');

const exec = require('child_process').exec;

var app = express();

app.use(bodyParser.json());

const UBUNTU_USER_ID = 1000
const options = {uid: UBUNTU_USER_ID}

app.post('/fire', function (req, res) {
  exec("cd ~/appFolder/ && git stash && git pull origin master && composer update", options)
  
  return res.status(200).json('done')
});

module.exports = app;
