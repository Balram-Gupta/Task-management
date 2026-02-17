const Task = require("../models/Task");

// Create Task
const createTask = async (req, res, next) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.user.userId
    });

    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Get My Tasks
const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

// Delete Task (Admin or Owner)
const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (
      task.user.toString() !== req.user.userId &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await task.deleteOne();

    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};    

module.exports = {
   createTask,
  getTasks,
  deleteTask
}