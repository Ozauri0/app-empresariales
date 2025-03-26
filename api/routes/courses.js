const express = require('express');
const router = express.Router();

const coursesRoutes = require('./courses');
const tasksRoutes = require('./tasks');
const usersRoutes = require('./users');

router.use('/courses', coursesRoutes);
router.use('/tasks', tasksRoutes);
router.use('/users', usersRoutes);

module.exports = router;