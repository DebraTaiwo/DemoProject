import { X, Menu } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const navItems = [
    { label: 'Products', link: '/products', hasChevron: true},
    { label: 'Pricing', link: '/pricing', hasChevron: false},
    { label: 'Integration', link: '/integration', hasChevron: false },
    { label: 'Resources', link: '/resources', hasChevron: true},
    { label: 'Company', link: '/company', hasChevron: true},
  ];

  const [mobileDrawerOpen, setMobileDrawerOpen]= useState(false);
  const toggleNavBar = ()=> {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="top-0 z-50 py-3 backdrop-blur-lg border-neutral-200 bg-[#F7F9FA] h-30 ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="w-full h-30 text-xl font-bold items-left text-[#802392]">VOLUUM</span>
          </div>
          <div className="hidden lg:flex mr-10 space-x-12">
            {navItems.map((item, index) => (
              <a key={index} href={item.link} className=" flex items-center justify-between font-medium text-sm transition-colors duration-300
              color-black border-2px ">
                {item.label}
                {item.hasChevron && (
                  <svg
                    className="ml-3 w-5 inline-block items-middle"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </a>
            ))}
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen? <X/> : <Menu/>}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className='fixed text-lg space-y-20 py-10 right-0 z-20 bg-blue-50 w-full p-10 flex flex-col justify-left lg:hidden'>
            <ul>
              {navItems.map((items, index)=>(
                <li key={index} className='mb-8'>
                  <a href={items.href}>
                    {items.label}
                    {items.hasChevron && (
                  <svg
                    className="ml-3 w-5 inline-block items-middle"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                    </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;