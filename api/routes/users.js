const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Obtener todos los usuarios
router.get('/', usersController.getAllUsers);

// Obtener un usuario específico
router.get('/:id', usersController.getUserById);

// Crear un nuevo usuario
router.post('/', usersController.createUser);

// Autenticar usuario
router.post('/login', usersController.loginUser);

// Actualizar un usuario
router.put('/:id', usersController.updateUser);

// Eliminar un usuario
router.delete('/:id', usersController.deleteUser);

module.exports = router;