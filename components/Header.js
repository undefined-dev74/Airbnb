import React from 'react';
import Image from 'next/image';
function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 p-5 md:px-5">
      {/* left */}
      <div className="relative flex items-center cursor-pointer my-auto h-20">
        <Image
          src="https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle */}
      <div></div>
      {/* right */}
      <div></div>
    </header>
  );
}

export default Header;
