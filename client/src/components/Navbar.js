import React from 'react'
import { Link } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-white shadow-sm max-w-6xl mx-auto px-4 h-16'>
        <div className='flex items-center space-x-2'>
            <Link className='w-6 h-6 text-blue-600'/>
            <span className='font-bold text-xl text-blue-600'>TINYCLIP</span>
        </div>

        <div className='hidden md:flex items-center space-x-8'>
            <a href='#features' className='text-gray-600 hover:text-blue-600'>Features</a>
            <a href='#pricing' className='text-gray-600 hover:text-blue-600'>Pricing</a>
            <a href='#api' className='text-gray-600 hover:text-blue-600'>API</a>
        </div>
        
        <div className='flex items-center space-x-4'>
            <button className='text-gray-600 hover:text-blue-600'>Login</button>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>Signup</button>
        </div>
    </div>
  )
}

export default Navbar