var express = require('express');
var router = express.Router();

var taskService = require('../services/taskService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var viewModel = {
  	taskList : taskService.getAll()
  };
  res.render('tasks/index', viewModel);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

router.post('/new', function(req, res, next){
	taskService.addNew(req.body.newTaskName);
	res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id, 10);
	taskService.toggle(taskId);
	res.redirect('/tasks');
});

module.exports = router;












