import Image from 'next/image';
import logoImage from '../assets/images/logo-default.png';

import MenuIcon from '../assets/icons/menu.svg';

export function Navbar() {
  return(
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-1 bottom-0 bg-[linear-gradient(to_right,rgb(248,_123,_255,_.5),rgb(251,_2,_207,_.5),rgb(255,_221,_155,_.5),rgb(194,_240,_177,_.5),rgb(47,_216,_254,_.5))] blur-md" />
            <Image src={logoImage} alt="Saas Logo" className="h-15 w-15 relative" />
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">About</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Features</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Updates</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Help</a>
            <a href="#" className="text-opacity-60 text-white hover:text-opacity-100 transition">Customers</a>
            <button className="bg-white py-2 px-4 rounded-lg ">Get for free</button>
          </nav>
        </div>
      </div>
    </div>
  );
}