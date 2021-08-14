import React from 'react';
import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2  md:px-5">
      {/* left */}
      <div className="relative flex  cursor-pointer my-auto h-16">
        <Image
          src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
