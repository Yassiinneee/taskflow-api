const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { auth, admin } = require('../middlewares/auth');

router.use(auth);
router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

// Admin routes
router.get('/admin/tasks', admin, taskController.getAllTasks);

module.exports = router;