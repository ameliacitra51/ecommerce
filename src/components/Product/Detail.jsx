import React from 'react';

const Detail = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Detail Product</h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 text-lg">Pict Product</span>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-6">
            <h3 className="text-lg font-medium mb-2">Name Product</h3>
            <p className="text-gray-600 mb-4">Price</p>
            <p className="text-gray-800">Description Product</p>
            <div className="flex mt-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Add to Cart
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;