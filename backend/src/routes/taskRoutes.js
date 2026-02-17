
const express = require("express");
const auth = require("../middleware/authMiddleware");
const { createTask, getTasks, deleteTask } = require("../controllers/taskController");

const router = express.Router();

console.log("auth:", auth);
console.log("createTask:", createTask);

router.post("/", auth, createTask);
router.get("/", auth, getTasks);
router.delete("/:id", auth, deleteTask);

module.exports = router;
