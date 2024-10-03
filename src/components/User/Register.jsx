import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'username') {
          setUsername(value);
        } else if (id === 'email') {
          setEmail(value);
        } else if (id === 'phone') {
          setPhone(value);
        } else if (id === 'address') {
          setAddress(value);
        } else if (id === 'password') {
          setPassword(value);
        }
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {username, email, phone, address, password};
        if(userData){
            localStorage.setItem('user', JSON.stringify(userData));
            alert('Registration successful!');
            navigate('/#');
        }else{
            setMessage('Harap perbaiki kesalahan sebelum melakukan submit.');
        }
        console.log(userData);
      };
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username" className='block text-sm font-medium mb-1'>Username:</label>
            <input type="text" onChange={handleChange} id='username' value={username} placeholder='Enter Username' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="email" className='block text-sm font-medium mb-1'>Email:</label>
            <input type="text" onChange={handleChange} id='email' value={email}  placeholder='Enter Email' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="phone" className='block text-sm font-medium mb-1'>No.Handphone:</label>
            <input type="text" onChange={handleChange}  id='phone' value={phone}  placeholder='Enter No.Handphone' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="address" className='block text-sm font-medium mb-1'>Address:</label>
            <input type="text" onChange={handleChange} id='address' value={address}  placeholder='Enter Address' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="password" className='block text-sm font-medium mb-1'>Password:</label>
            <input type="password"  onChange={handleChange} id='password' value={password}  placeholder='Enter Password' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>
            <br />
            <button type="submit" className='w-full py-2 bg-blue-400 rounded-md'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register
