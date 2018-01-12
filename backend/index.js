var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(session({secret: 'mysecrettoken'}));

app.use(
  function (req, res, next) {
    if (!req.session.todoList) {
      req.session.todoList = {};
    }
    next();
  }
);

app.get('/todo', function (req, res) {
  if (!req.session.views) {
    req.session.views = 0;
  }

  req.session.views++;
  res.send('Hello ! you already visited this route ' + req.session.views + ' time(s)');
});

app.get('/', function (req, res) {
  if (!req.session.todoList) {
    req.session.todoList = {};
  }

  res.json(req.session.todoList);
});

app.get('/view/:task', function(req, res){
  if (!req.session.todoList) {
    req.session.todoList = {};
  }
  if (req.session.todoList[req.params.task] != null) {
    res.json(req.session.todoList[req.params.task]);
  }else {
    res.send("N'existe pas");
  }

});

app.post('/add', urlEncodedParser, function (req, res) {
  if (!req.session.todoList) {
    req.session.todoList = {};
  }
  if(req.body['name'] != null && req.body['content'] != null){
    var name = req.body['name'];
    var content = req.body['content'];
    if(req.session.todoList[name] == null){
      req.session.todoList[name] = {
        "name": name,
        "content": content
      };
      res.json(req.session.todoList);
      // res.json(Object.keys(req.session.todoList).length); //----------------------------------------------------
    }else {
      res.send('Existe deja');
    }
    // res.json(req.session.todoList[name]);
  }else{
    res.send('empty');
  }
});

app.post('/modify/:task', urlEncodedParser, function (req, res) {
  if (!req.session.todoList) {
    req.session.todoList = {};
  }
  if (req.session.todoList[req.params.task] != null) {
    if(req.body['name'] != null && req.body['content'] != null){
      var name = req.body['name'];
      var content = req.body['content'];
      req.session.todoList[req.params.task] = undefined;
      req.session.todoList[name] = {
        "name": name,
        "content": content
      };

      res.json(req.session.todoList);
    }else{
      res.send(' empty ');
    }
  }else {
    res.send("N'existe pas");
  }
});

app.get('/delete/:task', function (req, res) {
  if (!req.session.todoList) {
    req.session.todoList = {};
  }
  if (req.session.todoList[req.params.task] != null) {
    req.session.todoList[req.params.task] = undefined;
    res.json(req.session.todoList);
  }else {
    res.send("N'existe pas");
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
