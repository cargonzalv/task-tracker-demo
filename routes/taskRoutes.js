const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/', async (req, res) => {
    const { title, description, details } = req.body;
     // Validate fields
    if (!title || !description || !details) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Proceed with saving to database
    const newTask = new Task({ title, description, details });
    const savedTask = await newTask.save();
    res.json(savedTask);
});

router.get('/:id', async (req, res) => {
    console.log()
    const task = await Task.findById(req.params.id);
    res.json(task);
});

module.exports = router;