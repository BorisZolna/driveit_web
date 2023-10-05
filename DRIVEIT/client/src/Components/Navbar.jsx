import React from 'react'
import logo from '../assets/driveit-logo.png'


function Navbar() {
  return (
    <nav >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold"><img className=' w-[350px] ' src={logo} alt="logo" /></div>
        <ul className="flex space-x-4">
          <li className="text-white">Typ vozidla</li>
          <li className="text-white">Cena od</li>
          <li className="text-white">Cena do</li>
          <li className="text-white">Dátum vyzdvihnutia</li>
          <li className="text-white">Dátum odovzdania</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
