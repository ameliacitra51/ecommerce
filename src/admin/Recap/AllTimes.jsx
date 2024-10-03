import React from 'react'

const times = [
    { value: 'Users', hasil: '200'},
    { value: 'Product', hasil: '70'},
    { value: 'Orders', hasil: '300'},
  ];

const AllTimes = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-white text-lg font-medium mb-4">
        All Times
      </h2>
      <div className="space-y-2">
        {times.map((time, index) =>(
          <div key={index} className='flex justify-between items-center text-white'>
          <div className="text-white font-medium">{time.value}</div>
          <div className="text-white">{time.hasil}</div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default AllTimes;
