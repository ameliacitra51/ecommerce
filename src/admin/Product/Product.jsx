import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="bg-green-100 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Product</h1>
      <Link to='/create'>
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create
        </button>
      </div>
      </Link>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price ($)</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
            <tr>
              <td className="border px-4 py-2">id</td>
              <td className="border px-4 py-2">
                <img src='' className="h-12 w-12 object-cover"/>
              </td>
              <td className="border px-4 py-2">name</td>
              <td className="border px-4 py-2">deskripsi</td>
              <td className="border px-4 py-2">harga</td>

              <td className="border px-4 py-2">
               <div  className='flex justify-center items-center'>
               <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Delete
                </button>
                <Link to='/create'>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
                  Edit
                </button>
                </Link>
                <Link to='/detail'>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                  View
                </button>
                </Link>
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

export default ProductList;