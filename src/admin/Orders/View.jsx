import React from 'react';

function View() {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-1xl font-bold">Order Details</h2>
      <h3 className='text-1xl mb-4'>Delevered status:</h3>
      <h2 className="text-1xl font-bold mb-4">Ordered Product</h2>
      <h2 className="text-1xl font-bold mb-4">Total Price</h2>
      <h2 className="text-1xl font-bold mb-4">Shipping Details</h2>
    </div>
  );
}

export default View;