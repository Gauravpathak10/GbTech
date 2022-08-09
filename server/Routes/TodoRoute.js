import express from "express";
import { CreatedTodo, deleteTodo, EditTodo, ReadTodo, ReadTodobyid } from "../Controller/TodoController";
const router = express.Router()


router.post('/create', CreatedTodo)
router.get('/read', ReadTodo)
router.get('/view/:id', ReadTodobyid)
router.put('/edit/:id', EditTodo)
router.delete('/delete/:id', deleteTodo)



export default router;