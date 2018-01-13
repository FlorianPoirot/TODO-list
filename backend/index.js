var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(session({secret: 'mysecrettoken'}));

app.use(
  function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    if (!req.session.todoList) {
      req.session.todoList = {};
      req.session.error = {};
      // ----------------------------------------------------
      req.session.todoList["name"] = {
        "name": "name",
        "content": "content"
      };
      req.session.todoList["name1"] = {
        "name": "name1",
        "content": "content"
      };
      req.session.todoList["name2"] = {
        "name": "name2",
        "content": "content"
      };
      // ----------------------------------------------------
    }
    next();
  }
);

app.get('/', function (req, res) {
  res.json(req.session);
});

// app.get('/todo', function (req, res) {
//   if (!req.session.views) {
//     req.session.views = 0;
//   }
//
//   req.session.views++;
//   res.send('Hello ! you already visited this route ' + req.session.views + ' time(s)');
// });
//
// app.get('/view/:task', function(req, res){
//   if (req.session.todoList[req.params.task] != null) {
//     res.json(req.session.todoList[req.params.task]);
//   }else {
//     res.send("N'existe pas");
//   }
//
// });
//
// app.post('/add', urlEncodedParser, function (req, res) {
//   if(req.body['name'] != null && req.body['content'] != null){
//     var name = req.body['name'];
//     var content = req.body['content'];
//     if(req.session.todoList[name] == null){
//       req.session.todoList[name] = {
//         "name": name,
//         "content": content
//       };
//       res.json(req.session.todoList);
//       // res.json(Object.keys(req.session.todoList).length); //----------------------------------------------------
//     }else {
//       res.send('Existe deja');
//     }
//     // res.json(req.session.todoList[name]);
//   }else{
//     res.send('empty');
//   }
// });
//
// app.post('/modify/:task', urlEncodedParser, function (req, res) {
//   if (req.session.todoList[req.params.task] != null) {
//     if(req.body['name'] != null && req.body['content'] != null){
//       var name = req.body['name'];
//       var content = req.body['content'];
//       req.session.todoList[req.params.task] = undefined;
//       req.session.todoList[name] = {
//         "name": name,
//         "content": content
//       };
//
//       res.json(req.session.todoList);
//     }else{
//       res.send(' empty ');
//     }
//   }else {
//     res.send("N'existe pas");
//   }
// });
//
// app.get('/delete/:task', function (req, res) {
//   if (req.session.todoList[req.params.task] != null) {
//     req.session.todoList[req.params.task] = undefined;
//     res.json(req.session.todoList);
//   }else {
//     res.send("N'existe pas");
//   }
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
