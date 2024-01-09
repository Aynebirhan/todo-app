const express = require("express");
const router = express.Router();
//const Todo = require("../models/todo");
//const moment = require("moment");
const todo = require("../controllers/todo");


router.get("/", todo.todoHomeController  );
router.get("/add-todo", todo.addTodoFormController );
router.get("/update-todo", todo.updateTodoFormController );
router.get("/delete-todo", todo.deleteTodoPageController );
router.post("/add-todo", todo.addTodoController);
router.post("/update-todo/:id", todo.updateTodoController);
router.get("/confirm-todo/", todo.confirmDeleteController);

  module.exports = router;