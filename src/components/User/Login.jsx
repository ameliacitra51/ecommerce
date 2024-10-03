import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const {id, value} = e.target;
        if(id === 'email'){
          setEmail(value);
        }else if(id === 'password'){
          setPassword(value);
        }
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {email, password}
            if(userData){
              alert('Login successful!'); 
              navigate('/#');
            }else{
              setMessage('Invalid email or password.');
            }
            console.log(userData);
      }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email" className='block text-sm font-medium mb-1'>Email:</label>
            <input type="text" onChange={handleChange} id='email' value={email} placeholder='Enter Email' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="password" className='block text-sm font-medium mb-1'>Password:</label>
            <input type="password" onChange={handleChange} id='password' value={password} placeholder='Enter Password' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>
            <br />
            <button type="submit" className='w-full py-2 bg-blue-400 rounded-md'>Login</button>
            <br />
            <h5>Don't have an account? <a href="/register" className='text-blue-400'>Register</a></h5>
        </form>
      </div>
    </div>
  )
}

export default Login
