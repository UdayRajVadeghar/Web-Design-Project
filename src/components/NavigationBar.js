import React, { useState } from 'react';
import logo from '../assets/logo.webp';

const NavigationBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='h-20 flex justify-between items-center bg-gray-50 border-2 sticky z-30'>
      <div className='pl-14 ml-6'>
        <button className='pt-2'>
          <img src={logo} className='w-24 h-auto' alt='Logo' />
        </button>
      </div>

      <div className='hidden md:flex'>
        <ul className='flex justify-between items-center gap-8'>
          <li><button>Products</button></li>
          <li><button>Docs</button></li>
          <li><button>Customers</button></li>  {/* Potentially shortened to "Cust." */}
          <li><button>Pricing</button></li>
          <li><button>Blog</button></li>
        </ul>
      </div>

      <div className='relative md:hidden'>
        <button className='flex items-center justify-center p-5' onClick={toggleDropdown}>
          More &#8595;
        </button>

        <ul
          className={`absolute top-full right-0 bg-gray-50 w-full shadow-md ${
            isDropdownOpen ? 'block' : 'hidden'
          }`}
        >
          <li><button>Products</button></li>
          <li><button>Docs</button></li>
          <li><button>Customers</button></li>  {/* Potentially shortened to "Cust." */}
          <li><button>Pricing</button></li>
          <li><button>Blog</button></li>
        </ul>
      </div>

      <div className='flex items-center pr-4 md:pr-14'>
        <button className='p-2 md:p-4'>Login</button>
        <button className='border-2 p-2 md:p-2 rounded-full bg-blue-50  0 text-white'>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
