
import Todo from "../Models/TodoModel";


//Create
export const CreatedTodo = async (req, res) => {
    const { title } = req.body
    if (!title) {
        return res.status(402).json({
            message: "title required",
            status: false
        })
    }
    try {
        const newdata = { title }
        const add = await Todo.create(newdata)
        return res.status(200).json({
            message: "successful",
            data: add
        })

    }
    catch (error) {
        return res.status(400).json({
            messsage: error
        })

    }
}

// edit 
export const EditTodo = async (req, res) => {
    try {
        const data = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(200).json({
            message: "Edited",
            data: data
        })
    } catch (error) {
        return res.status(200).json({
            message: "Edited",
            data: error
        })
    }

}
// Delete 
export const deleteTodo = async (req, res) => {
    try {
        const data = await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Successfully deleted",
            data: false
        })
    } catch (error) {
        return res.status(200).json({
            message: "Not deleted",
            error: error
        })

    }
}
//Read
export const ReadTodo = async (req, res) => {
    try {
        const data = await Todo.find()
        res.status(200).json({
            message: "successful",
            data: data
        })
    } catch (error) {
        res.status(200).json({
            message: "successful",
            error: error
        })
    }

}
//Read by id
export const ReadTodobyid = async (req, res) => {
    try {
        const data = await Todo.findById(req.params.id)
        res.status(200).json({
            message: "successful",
            data: data
        })
    } catch (error) {
        res.status(200).json({
            message: "successful",
            error: error
        })
    }

}
