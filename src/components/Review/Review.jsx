import React from 'react';

const Review = () => {
  const testimoniData = [
    {
      id: 1,
      nama: 'John Doe',
      testimoni: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      id: 2,
      nama: 'Jane Doe',
      testimoni: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      id: 3,
      nama: 'Bob Smith',
      testimoni: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
    {
      id: 4,
      nama: 'Citra',
      testimoni: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl text-center font-bold mb-4">Review</h2>
      <div className="flex flex-wrap -mx-4">
        {testimoniData.map((testimoni) => (
          <div key={testimoni.id} className="w-full md:w-1/3 xl:w-1/4 p-4 ">
            <div className="bg-white rounded-lg shadow-md p-4 hover:bg-white duration-300 hover:shadow-2xl">
              <p className="text-gray-600 text-center text-lg">{testimoni.testimoni}</p>
              <p className="text-gray-800 font-bold text-center mt-4">{testimoni.nama}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;