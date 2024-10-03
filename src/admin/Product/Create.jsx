import React from 'react'

const Create = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Create a Product</h2>
        <h2 className='text-2xl font-bold mb-4 text-center'>Edit a Product</h2>
        <form>
            <div>
            <label htmlFor="picture" className='block text-sm font-medium mb-1'></label>
            <input type="text" placeholder='Choose File(pict)' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="name" className='block text-sm font-medium mb-1'></label>
            <input type="text" placeholder='Name Product' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="description" className='block text-sm font-medium mb-1'></label>
            <input type="text" placeholder='Description' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>

            <div>
            <label htmlFor="price" className='block text-sm font-medium mb-1'></label>
            <input type="text" placeholder='Price' className='w-full px-4 py-2 border border-gray-300 rounded-md'/>
            </div>
            <br />
            <button type="submit" className='w-full py-2 bg-blue-400 rounded-md'>Register</button>
        </form>
      </div>
    </div>
  )
}

export default Create
