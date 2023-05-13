import React from "react";

const Navbar = () => {

    return (

        <nav className="flex justify-between items-center mx-auto px-5 text-white">
        <div className="flex items-center justify-center h-full">
          <h1 className="p-5px font-bold">ARVIN JOHN A. PAPA</h1>
        </div>
        <ul className="flex">
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">Experience</li>
          <li className="p-3">Skills</li>
        </ul>
      </nav>
    )
}


export default Navbar;