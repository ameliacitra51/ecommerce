import React from 'react';
import { HiUser} from "react-icons/hi2";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Latest from './Latest';
import AllTimes from './AllTimes';
import LineChart from './LineChart';

const Recap = () => {
  return (
    <div className="flex h-screen bg-green-100"> 
      <div className="bg-white w-64 shadow-md">
        <div className="p-6">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md w-full mb-2">
            Recap
          </button>

          <Link to='/productadm'>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md w-full mb-2">
            Product
          </button>
          </Link>

          <Link to='/orders'>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md w-full mb-2">
            Orders
          </button>
          </Link>

         <Link to='/users'>
         <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md w-full">
            Users
          </button>
         </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 bg-white p-6"> 
        <div className="flex flex-col gap-4"> 

          {/* Overview & Latest Transactions */}
          <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
            {/* Overview */}
            <div className='w-full md:w-1/2 bg-gray-900 p-4 rounded-lg shadow-md'>
              <h2 className="text-xl font-bold mb-4 text-white">Overview</h2>
              <div className="flex space-x-4">

                {/* Users */}
                <div className="flex items-center bg-blue-500 text-white rounded-lg p-2">
                  <HiUser Group className="mr-2" />
                  <div>
                    <p className="text-sm">Users</p>
                    <p className="text-lg font-bold">1</p>
                    <p className="text-xs text-green-400">+0%</p> 
                  </div>
                </div>

                {/* Orders */}
                <div className="flex items-center bg-blue-500 text-white rounded-lg p-2">
                  <RiShoppingBag3Fill className="mr-2" />
                  <div>
                    <p className="text-sm">Orders</p>
                    <p className="text-lg font-bold">4</p>
                    <p className="text-xs text-green-400">+33%</p>
                  </div>
                </div>
                
                {/* Earnings */}
                <div className="flex items-center bg-blue-500 text-white rounded-lg p-2">
                  <FaChartBar className="mr-2" />
                  <div>
                    <p className="text-sm">Earnings</p>
                    <p className="text-lg font-bold">$5,015</p>
                    <p className="text-xs text-red-500">-22%</p> 
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Transactions */}
            <div className='w-full md:w-1/2'>
              <Latest />
            </div>
          </div>

          {/* Line Chart & All Times */}
          <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
            {/* Line Chart */}
            <div className="w-full md:w-2/3">
              <LineChart />
            </div>

            {/* All Times */}
            <div className="w-full md:w-1/3">
              <AllTimes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recap; 