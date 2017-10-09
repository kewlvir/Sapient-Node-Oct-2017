var express = require('express');
var router = express.Router();

var taskService = require('../services/taskService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var viewModel = {
  	taskList : taskService.getAll()
  };
  res.json(viewModel);
});


router.post('/new', function(req, res, next){
	var newTask = taskService.addNew(req.body.newTaskName);
	res.json(newTask)
});

router.get('/toggle/:id', function(req, res, next){
	var taskId = parseInt(req.params.id, 10);
	var toggledTask = taskService.toggle(taskId);
	res.json(toggledTask);
	
});

module.exports = router;












