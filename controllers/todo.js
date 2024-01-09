
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
  const updateTodoFormController = async(req, res, next) => {
    try{
      const { id } = req.query;
      const todo = await Todo.findById(id);
      res.render("updateTodo", {title: "Update", todo})
  
    }catch(error){
      res.status(500).json({message: error.message})
    }
  
  };

  const deleteTodoPageController =  (req, res, next) => {
    try{

      const { id } = req.query;
      res.render("deleteTodo", {title: "Delete", id})
  
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

  const updateTodoController = async(req, res, next) => {
    try{
      const { id } = req.params;
      const {title, desc} = req.body;
      const todo = await Todo.findById(id);

      if(!todo){
        res.status(400).json({mesaage: "Todo not found"})
      }

      todo.title = title;
      todo.desc = desc;

      await todo.save();

      res.redirect("/")

    }catch(error){
      res.status(500).json({message: error.message})
    }
  };

  const confirmDeleteController = async(req, res, next) => {
    try{
      const {id, confirm} = req.query;

      if(confirm === "Yes"){
        await Todo.findByIdAndDelete(id);
      }

      res.redirect("/");

    }catch(error){
      res.status(500).json({message: error.mesaage})
    }
  }

  module.exports = {
    todoHomeController,
     addTodoFormController,
     updateTodoFormController,
     deleteTodoPageController,
     addTodoController,
     updateTodoController,
     confirmDeleteController
    };