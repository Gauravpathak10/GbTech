
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import EdittTodo from './components/EdittTodo';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/edit/:id' element={<EdittTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
