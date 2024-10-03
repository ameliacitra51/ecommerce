import React from 'react';

const data = [
  { x: 'Jan', y: 10 },
  { x: 'Feb', y: 20 },
  { x: 'Mar', y: 30 },
  { x: 'Apr', y: 40 },
  { x: 'May', y: 50 },
  { x: 'Jun', y: 60 },
];

const LineChart = () => {
  return (
    <div className="w-full h-64 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-bold mb-4">Line Chart</h2>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full">
          {data.map((point, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${100 - (point.y / 60) * 100}%`,
                left: `${(index / (data.length - 1)) * 100}%`,
              }}
            >
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </div>
          ))}
          {data.map((point, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${100 - (point.y / 60) * 100}%`,
                left: `${(index / (data.length - 1)) * 100}%`,
              }}
            >
              <div className="text-gray-600 text-sm">{point.x}</div>
            </div>
          ))}
          {data.map((point, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: `${100 - (point.y / 60) * 100}%`,
                left: `${(index / (data.length - 1)) * 100}%`,
              }}
            >
              <div className="text-gray-600 text-sm">{point.y}</div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200" />
        <div className="absolute left-0 top-0 w-1 h-full bg-gray-200" />
      </div>
    </div>
  );
};

export default LineChart;