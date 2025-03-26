const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

// Obtener todas las tareas
router.get('/', tasksController.getAllTasks);

// Obtener tareas por estado
router.get('/status/:status', tasksController.getTasksByStatus);

// Obtener una tarea específica
router.get('/:id', tasksController.getTaskById);

// Crear una nueva tarea
router.post('/', tasksController.createTask);

// Actualizar una tarea
router.put('/:id', tasksController.updateTask);

// Enviar una tarea (marcar como completada)
router.post('/:id/submit', tasksController.submitTask);

// Eliminar una tarea
router.delete('/:id', tasksController.deleteTask);

module.exports = router;