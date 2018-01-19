var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

app.use(urlEncodedParser);

app.use(session({
  secret: 'mysecrettoken',
  resave: false,
  saveUninitialized: true
}))

app.use(
  function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    req.session.error = '';
    if (!req.session.todoList) {
      req.session.todoList = {};

      // ----------------------------------------------------
      req.session.todoList["name"] = {
        "name": "name",
        "content": "content"
      };
      req.session.todoList["name"] = {
        "name": "name",
        "content": "content123"
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
app.post('/add', urlEncodedParser, function (req, res) {
  if(req.body['name'] != null && req.body['content'] != null && req.body['name'] != "" && req.body['content'] != ""){
    if (! Array.isArray(req.body['name'])) {
      var name = req.body['name'];
      var content = req.body['content'];
    } else {
      var name = req.body['name'][req.body['name'].length-1];
      var content = req.body['content'][req.body['content'].length-1];
    }

    name = name.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    content = content.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');

    if (name != null && content != null &&  name != "" && content != "") {
      if(req.session.todoList[name] == null){
        req.session.todoList[name] = {
          "name": name,
          "content": content
        };
        res.json(req.session);
      }else {
        req.session.error = "Existe deja";
        res.send(req.session);
      }
    } else {
      req.session.error = "Tous les champs sont obligatoires";
      res.send(req.session);
    }
  }else{
    req.session.error = "Tous les champs sont obligatoires";
    res.send(req.session);
  }
});

app.post('/modify', urlEncodedParser, function (req, res) {
  if(req.body['name'] != null && req.body['oldName'] != null && req.body['content'] != null && req.body['name'] != "" && req.body['oldName'] != "" && req.body['content'] != ""){
    if (! Array.isArray(req.body['name'])) {
      var name = req.body['name'];
      var oldName = req.body['oldName'];
      var content = req.body['content'];
    } else {
      var name = req.body['name'][req.body['name'].length-1];
      var oldName = req.body['oldName'][req.body['oldName'].length-1];
      var content = req.body['content'][req.body['content'].length-1];
    }

    name = name.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    oldName = oldName.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    content = content.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    console.log("name__"+name+"__");
    console.log("oldName__"+oldName+"__");
    console.log("content__"+content+"__");

    if (name != null && oldName != null && content != null &&  name != "" &&  oldName != "" && content != "") {
      if (req.session.todoList[req.body['oldName']] == null) {
        if (req.session.todoList[name] != null && name != oldName) {
          req.session.error = "Une tache possede deja ce nom";
          res.send(req.session);
        }else {
          req.session.todoList[oldName] = undefined;
          req.session.todoList[name] = {
            "name": name,
            "content": content
          };
          res.json(req.session);
        }
      } else {
        req.session.error = "Cette tache n'existe pas";
        res.send(req.session);
      }
    } else {
      req.session.error = "Tous les champs sont obligatoires";
      res.send(req.session);
    }
  }else{
    req.session.error = "Tous les champs sont obligatoires";
    res.send(req.session);
  }
});

app.post('/delete', urlEncodedParser, function (req, res) {
  if (! Array.isArray(req.body['task'])) {
    var name = req.body['task'];
  } else {
    var name = req.body['task'][req.body['task'].length-1];
  }

  if (req.session.todoList[name] != null) {
    req.session.todoList[name] = undefined;
    // res.json(req.session.todoList);
  }else {
    // res.send("N'existe pas");
  }
  res.json(req.session);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
