import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Product 1', price: '$100', status: 'Pending', date: '2024-10-03' },
  ]);

  const updateStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="bg-green-100 p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.name}</td>
              <td className="border px-4 py-2">{order.price}</td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">{order.date}</td>
              <td className="border px-4 py-2">
                <div className='flex justify-center items-center'>
                  <button
                    onClick={() => updateStatus(order.id, 'Dispatched')}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Dispatch
                  </button>
                  <button
                    onClick={() => updateStatus(order.id, 'Delivered')}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                  >
                    Delivered
                  </button>
                  <Link to='/view'>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                      View
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
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

export default Orders;
