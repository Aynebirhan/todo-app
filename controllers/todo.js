
const Todo = require("../models/todo");
const moment = require("moment");

const todoHomeController =  async(req, res, next) => {
    try{
  
      res.locals.moment = moment;
  
      const todos = await Todo.find({}).sort({ createdAt: -1});
      res.render("index", {title: "List", todos})
  
    }catch(error){
      res.status(500).send(error.message)
    }
  };

  const addTodoFormController =  (req, res, next) => {
    try{
      res.render("newTodo", {title: "Add"})
  
    }catch(error){
      res.status(500).json({message: error.message})
    }
  
  };
  const updateTodoFormController = (req, res, next) => {
    try{
      res.render("updateTodo", {title: "Update"})
  
    }catch(error){
      res.status(500).json({message: error.message})
    }
  
  };

  const deleteTodoPageController =  (req, res, next) => {
    try{
      res.render("deleteTodo", {title: "Delete"})
  
    }catch(error){
      res.status(500).json({message: error.message})
    }
  
  };

  const addTodoController = async(req, res, next) => {
    try{
      const {title, desc} = req.body;
      const newTodo = new Todo({title, desc});
      await newTodo.save();
      
      res.redirect("/")
  
    }catch(error){
      res.status(500).json({message: error.message})
    }
  }; 

  module.exports = {
    todoHomeController,
     addTodoFormController,
     updateTodoFormController,
     deleteTodoPageController,
     addTodoController,
    };