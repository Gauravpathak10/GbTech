import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
    const [title, settitle] = useState([])
    const [data, setdata] = useState([])

    const addTodo = () => {
        const data = { title }
        axios.post('http://localhost:4000/create', data)
            .then((res) => GetTodo())
            .catch((err) => alert(err.response.data.messsage._message))
    }

    const GetTodo = () => {
        axios.get('http://localhost:4000/read')
            .then((res) => setdata(res.data.data))
            .catch((err) => console.log(err))
    }
    const DeleteTodo = (e) => {
        axios.delete(`http://localhost:4000/delete/${e.target.id}`)
            .then((res) => GetTodo()).then(alert('The todo has been Deleted'))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        GetTodo()
    }, [])

    return (
        <div className="wrapper">
            <h1>Todo App</h1>
            <div className="task-input">
                <input type="text" placeholder="Add a new task" name='title' value={title} onChange={(e) => settitle(e.target.value)} />
                <button onClick={addTodo}>✚</button>
            </div>
            {data.map((list, i) =>
                <div key={i} className='todos-list'>
                    <p>
                        <span>{list.title}</span>
                    </p>
                    <div>
                        <Link to={`/edit/${list._id}`}>🖋</Link>
                        <button id={list._id} onClick={DeleteTodo}>🗑</button>
                    </div>
                </div>
            )}
            <div className="controls">
                <span>Your total todos are {data.length} </span>
                <button>Clear All</button>
            </div>
        </div>
    )
}

export default Home