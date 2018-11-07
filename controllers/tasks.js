const Task = require('../models/tasks');

const taskCtrl = {};

taskCtrl.taskList = async (req, res) => {
    const tasks = await Task.find();
    console.log(tasks)
    res.render('tasks', { title: 'Tasks List', message: 'Task List', tasks: tasks })
};

taskCtrl.taskCreate = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.redirect('/tasks/list')
};

taskCtrl.taskDetail = async (req, res) => {
    const task = await Task.findById(req.params.id);
};

taskCtrl.taskUpdate = async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.set(req.body);
    task.save();
    res.redirect('/tasks/list')
};

taskCtrl.taskDelete = async (req, res) => {
    const task = await Task.findById(req.params.id);
    task.remove()
    res.redirect('/tasks/list')
};

module.exports = taskCtrl;