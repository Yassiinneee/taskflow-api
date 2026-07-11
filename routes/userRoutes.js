const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { auth, admin } = require('../middlewares/auth');

router.use(auth);
router.get('/me', userController.getProfile);
router.put('/me', userController.updateProfile);

// Admin routes
router.get('/admin/users', admin, userController.getAllUsers);
router.delete('/admin/users/:id', admin, userController.deleteUser);

module.exports = router;