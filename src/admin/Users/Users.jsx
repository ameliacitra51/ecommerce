import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div className="bg-green-100 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
            <tr>
              <td className="border px-4 py-2">citra</td>
              <td className="border px-4 py-2">citra@gmail.com</td>
              <td className="border px-4 py-2">
                <div className='flex justify-center items-center'>
                <button className="bg-blue-500 text-white font-bold py-1 px-2 rounded mr-2">
               Costumer
                </button>
                </div>
              </td>
              
              <td className="border px-4 py-2">
               <div className='flex justify-center items-center'>
               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2">
               Delete
                </button>
               </div>
              </td>
            </tr>
        </tbody>
      </table>
      <br />

      <Link to='/recap'>
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Users;