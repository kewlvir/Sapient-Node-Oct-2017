var express = require('express');
var router = express.Router();

var tasks = [
	{id : 1, name : 'Watch a movie', isCompleted : false},
	{id : 2, name : 'Fix that bug', isCompleted : true},
	{id : 3, name : 'Learn JavaScript', isCompleted : false},
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('All the tasks will be displayed here');
  var viewModel = {
  	taskList : tasks
  };
  res.render('tasks/index', viewModel);
});

router.get('/new', function(req, res, next){
	res.render('tasks/new');
});

module.exports = router;
