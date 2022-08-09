import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState([''])
    const [error, seterror] = useState('')
    const [password, setpassword] = useState([''])
    const signIn = (e) => {
        e.preventDefault()
        const data = { email, password }
        if (email == '' || password == '') {
            return seterror(`😅 All Field required`)
        }
        axios.post('http://localhost:4000/login', data)
            .then((res) => {
                if (res.data.Token) {
                    localStorage.setItem('Token', JSON.stringify(res.data.Token))
                    navigate('/home')
                } else {
                    navigate('/')
                }
            })
            .catch((err) => {
                seterror(err.response.data.message)
            })
    }
    return (
        <div className='form'>
            <form action="">
                <h1>Login</h1>
                <p>{error}</p>
                <input type="email" placeholder='...email' name='email' value={email} onChange={(e) => { setemail(e.target.value); seterror('') }} />
                <input type="password" placeholder='...Enter password' name='password' value={password} onChange={(e) => { setpassword(e.target.value); seterror('') }} />
                <button type='submit' onClick={signIn}>Submit</button>
                <span>Don't have an account <Link to='/register'>register</Link></span>
            </form>
        </div>
    )
}

export default Login