var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');

//routes
router.get('/todos', function(req, res){
  Todo.find(function(err, todos){
    if(err){
      res.send(err);
    }
    res.json(todos);
  });
});

router.post('/todo', function(req, res){
  // Todo.create({
  //   text: req.body.text
  // }, function(err, todo){
  //   if(err){
  //     res.send(err);
  //   }
  //   Todo.find(function(err, todos){
  //     if(err){
  //       res.send(err);
  //     }
  //     res.json(todos);
  //   });
  // });

  var toAdd = new Todo({
    text: req.body.text,
    done: false
  });
  toAdd.save(function(err, contact){
    if(err){
      res.send(err);
    }
    Todo.find(function(err, todos){
      if(err){
        res.send(err);
      }
      res.json(todos);
    });
  });
});

router.delete('/todos/:id', function(req, res){
  var todoId = req.params.id;
  Todo.remove({_id: todoId}, function(err, todo){
    if(err){
      res.send(err);
    }
    Todo.find(function(err, todos){
      if(err){
        res.send(err);
      }
      res.json(todos);
    });
  });
});

module.exports = router;
