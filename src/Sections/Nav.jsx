import { useState } from 'react';
import { navLinks } from "../constants";
import { hamburger, logo } from '../Assets/icons/index';

const Nav = () => {
  // State to manage the sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full shadow-xl'>
      <nav className='flex justify-between items-center max-container'>
        <div className="flex justify-center items-center h-10 ">
          <img 
            src={logo}
            alt="logo"
            height={150}
            width={150}
            className="object-contain"
          />
        </div>
        <a href='/'></a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="cursor-pointer font-montserrat text-lg text-slate-gray hover:text-black"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            onClick={toggleSidebar}
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 right-[7rem] w-1/2 h-full bg-white shadow-lg z-20">
          <button onClick={toggleSidebar} className="p-4">Close</button>
          <ul className="flex flex-col p-4">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <a 
                  href={link.href}
                  className="cursor-pointer font-montserrat text-lg text-slate-gray hover:text-black"
                  onClick={toggleSidebar} // Close sidebar on link click
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;