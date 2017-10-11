var tasks = [
	{id : 1, name : 'Watch a movie', isCompleted : false},
	{id : 2, name : 'Fix that bug', isCompleted : true},
	{id : 3, name : 'Learn JavaScript', isCompleted : false},
];

function addNew(taskName){
	var newTask = {
		id : tasks.reduce(function(result, task){
			return task.id > result ? task.id : result;
		}, 0) + 1,
		name : taskName,
		isCompleted : false
	};
	tasks.push(newTask);
	return newTask;
}

function toggle(taskId){

	var taskToToggle = tasks.filter(function(task){
		return task.id === taskId;
	})[0];

	if (taskToToggle){
		taskToToggle.isCompleted = !taskToToggle.isCompleted;
	}
	return taskToToggle;
}

function getAll(){
	return tasks.slice(0);
}

module.exports = {
	getAll : getAll,
	addNew : addNew,
	toggle : toggle
};

