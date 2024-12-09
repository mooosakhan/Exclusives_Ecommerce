import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  return (
    <div className='font-mono border-b-2 border-zinc-200 flex justify-around py-6 items-center'>
    <div className="exclusive font-bold text-2xl ">Exclusive</div>
    <div className="navs flex justify-evenly gap-4 text-lg">
      <div className="Home ">Home</div>
      <div className="Contact">Contact</div>
      <div className="About">About</div>
      <div className="Signup">Signup</div>
    </div>
    <div className="sch flex justify-evenly gap-4 items-center text-lg">
      <div className="search flex items-center rounded-none px-2 bg-zinc-100">
        <input 
          type="search" 
          placeholder="Search your type.." 
          className="outline-none px-2 bg-zinc-100"

        />
        <i className="fas fa-search text-zinc-900"></i>
      </div>
      <div className="wishlist flex items-center">
        <i class="fas fa-heart"></i> 
      </div>
      <div className="cart flex items-center">
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
  
  )
}

export default Navbar
