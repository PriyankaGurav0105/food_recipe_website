import React from 'react';

const Mainpage = () => {
  return (
   <>
  
   <div className="bg-lime-300 m-8 justify-center h-64 rounded-md">
   <h1 className='text-center text-3xl mt-4 p-8'>FOOD RECIPE APP</h1>
   <p className='text-center text-xl'>Find your fav dish recipe here....</p>
    <div className='flex justify-center gap-2 mt-5 p-6'>
        <input type='text' placeholder='Enter Name' className='w-96 p-2 text-2xl bg-[#e7e7e7] rounded-md'/>
        <button className='w-24 bg-lime-800 text-white text-2xl rounded-md cursor-pointer'>Search</button>
    </div>
   </div>
   </>
  )
}

export default Mainpage;
