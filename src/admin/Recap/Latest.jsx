import React from 'react';

const transactions = [
  { name: 'chaoo', amount: '$1,000', time: '12 hours ago' },
  { name: 'John', amount: '$1,000', time: '20 hours ago' },
  { name: 'Davy', amount: '$1,015', time: '4 days ago' },
  { name: 'chaoo', amount: '$2,000', time: 'a day ago' },
];

const Latest = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <h2 className="text-white text-lg font-medium mb-4">
        Latest Transactions
      </h2>
      <div className="space-y-2">
        {transactions.map((transaction, index) =>(
          <div key={index} className='flex justify-between items-center text-white'>
          <div className="text-white font-medium">{transaction.name}</div>
          <div className="text-white">{transaction.amount}</div>
          <div className="text-gray-400 text-sm">{transaction.time}</div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;