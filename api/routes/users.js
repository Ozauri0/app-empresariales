const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Verifica que los controladores estén definidos
router.get('/', usersController.getAllUsers); // Aquí podría estar el problema
router.get('/:id', usersController.getUserById);
router.get('/username/:username', usersController.getUserByUsername);
router.post('/', usersController.createUser);
router.post('/login', usersController.loginUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.patch('/:id/role', usersController.changeUserRole);

module.exports = router;