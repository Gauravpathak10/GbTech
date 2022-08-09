import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

const EdittTodo = () => {
    const [title, settitle] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:4000/view/${id}`)
            .then((res) => settitle(res.data.data.title))
            .catch((err) => console.log(err))
    }, [])
    const editTodo = (e) => {
        e.preventDefault()
        const data = { title }
        axios.put(`http://localhost:4000/edit/${id}`, data)
            .then((res) => {
                navigate('/home')
            }
            )
            .catch((err) => console.log(err))

    }
    return (
        <div className='task-input' style={{ width: "200px" }}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder='...title' id="" value={title} onChange={(e) => settitle(e.target.value)} />
                <button className='btn' onClick={editTodo}>Update</button>
                <Link to='/home' className='btn'>Go back</Link>
            </div>
        </div>
    )
}

export default EdittTodo