import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../assets/logo.png';

function Navbar() {

  useEffect(() => {

    gsap.set(["#navbar-logo", "#navbar-input", "#navbar-login", "#navbar-get-started"], { opacity: "0", top: "-250" })
    const tl = gsap.timeline() // Navbar animation with stagger 

    tl.to(["#navbar-logo", "#navbar-input", "#navbar-login", "#navbar-get-started"],
      { duration: 1, opacity: 1, top: 0, stagger: 0.4, ease: "power2.out" })
  }, [])

  return (
    <nav id="navbar" className="w-full top-0 left-0 fixed  flex items-center justify-between px-4 md:px-20">
      <div className=" w-1/3 md:flex-1 flex justify-start">
        <img src={logo} alt="" style={{ width: '100px', height: '100px' }} />
        {/* <h1 id="navbar-logo" className="text-appleGray text-3xl ">Exquisite</h1> */}
      </div>
      <div className="w-2/3 md:flex-1 flex  justify-evenly md:justify-end items-center md:space-x-4">
        <div className="relative w-full md:w-auto">
          <input id="navbar-input" type="text" placeholder="Search Creator" className="group relative w-full md:w-auto px-1 py-1 text-sm rounded-lg bg-transparent border border-black font-semibold placeholder-black focus:outline-none"
          />

          <span className="absolute h-0 w-0 bg-appleGray transition-all duration-300 ease-out group-hover:h-full group-hover:w-full"></span>
        </div>

        <button id="navbar-login" className="group border border-black relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent px-1 md:px-3 py-1 text-sm text-black font-semibold shadow-lg w-full md:w-auto"
        >

          <span className="absolute h-0 w-0 bg-black font-semibold transition-all duration-300 ease-liner group-hover:h-full group-hover:w-full"></span>
          <span className="relative group-hover:text-white ">Login</span>
        </button>

        <button id="navbar-get-started" className="group border border-black relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-transparent px-3 py-1 text-sm text-black font-semibold shadow-lg w-full md:w-auto"
        >
          <span className="absolute h-0 w-0 bg-black transition-all duration-300 ease-out group-hover:h-full group-hover:w-full"></span>

          <span className="relative group-hover:text-white ">Get Started</span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar
