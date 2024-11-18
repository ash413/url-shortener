import React from 'react'
import { Link } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center'>
            <Link />
            <h1>TINYCLIP</h1>
        </div>

        <div>
            <a href='#features' className=''>Features</a>
            <a href='#pricing' className=''>Pricing</a>
            <a href='#api' className=''>API</a>
        </div>
        
        <div>
            <button>Login</button>
            <button>Signup</button>
        </div>
    </div>
  )
}

export default Navbar