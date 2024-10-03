import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const data = [
      { name: 'admin123', password: 'admin123' },
    ];

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === data[0].name && password === data[0].password) {
            alert('Login successful!');
            navigate('/recap');
        } else {
            alert('Invalid username or password.');
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-6 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Login for Admin</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username" className='block text-sm font-medium mb-1'>Username:</label>
            <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
        </div>

        <div>
            <label htmlFor="password" className='block text-sm font-medium mb-1'>Password:</label>
            <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
        </div>
        <br />
        <button type="submit" className='w-full py-2 bg-blue-400 rounded-md'>Login</button>
      </form>
      </div>
    </div>
  )
}

export default SignIn
