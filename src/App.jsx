
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navber/Nav.jsx';
import Home from './components/pages/Home.jsx';
import Posts from './components/pages/Posts.jsx';
import Profile from './components/pages/Profile.jsx';
import Login from './components/pages/Login.jsx';
import Register from './components/pages/Register.jsx';

function App() {

  return (
    <>
      <div className='min-h-screen bg-lime-200'>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  )
}

export default App
