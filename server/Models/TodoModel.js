import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = Schema({
    title: {
        type: String
    },
    time: { type: Number, default: (new Date()).getTime() }
})

const Todo = mongoose.model('Todo', schema)
export default Todo;