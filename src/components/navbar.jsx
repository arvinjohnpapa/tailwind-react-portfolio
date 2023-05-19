import React from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav);
      console.log("NAV WAS CLICKED!")
    }

    return (
    <>
        <nav className="flex justify-between items-center mx-auto px-5 h-16 text-white">
        <div className="flex items-center justify-center h-full">
          <h1 className="p-5px font-bold">ARVIN JOHN A. PAPA</h1>
        </div>
        <ul className="flex hidden md:flex">
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Experience</li>
          <li className="p-3">Skills</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20}></AiOutlineClose > : <AiOutlineMenu size={20}></AiOutlineMenu>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 h-full md:hidden ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className="pt-16">
            <li className="p-3">Home</li>
            <li className="p-3">About</li>
            <li className="p-3">Experience</li>
            <li className="p-3">Skills</li>
          </ul>
        </div>
      </nav>
    </>
    )
}


export default Navbar;