import { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const changeHandler = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios({url:'http://localhost:5000/users/login', method:'POST',data:user})
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='h-full'>
        <form className='flex flex-col gap-y-5 m-auto my-10 sm:w-2/3 w-1/3' name='register-form' onSubmit={submitHandler}>
            <h3>Login here</h3>
            <p>Please fill all field !!</p>
            <input type="email" name='email' id='email' placeholder='email' className='px-2 py-2 rounded' onChange={changeHandler}/>
            <input type="password" name='password' id='password' placeholder='password' className='px-2 py-2 rounded' onChange={changeHandler}/>
            <input type="submit" value="Login" className='px-2 py-2 rounded bg-lime-400' />
        </form>
    </div>
  )
}

export default Login