const Task = require('../models/Task');
const xss = require('xss');

exports.createTask = async (req, res) => {
  const sanitizedTitle = xss(req.body.title);
  const sanitizedDescription = xss(req.body.description);

  try {
    const task = await Task.create({
      title: sanitizedTitle,
      description: sanitizedDescription,
      user: req.user._id
    });
    res.status(201).json({ status: 'success', data: { task } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json({ status: 'success', data: { tasks } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const sanitizedTitle = xss(req.body.title);
  const sanitizedDescription = xss(req.body.description);
  const completed = req.body.completed;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user._id },
      {
        title: sanitizedTitle,
        description: sanitizedDescription,
        completed
      },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ status: 'success', data: { task } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id, user: req.user._id });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ status: 'success', message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('user');
    res.json({ status: 'success', data: { tasks } });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};