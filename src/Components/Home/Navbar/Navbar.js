import React from 'react';
import './Navbar.css';
import logo from '../../../assetes/logo.png'
const Navbar = () => {
    return (
        <>

<nav>
  <div class="logo">
    <img src={logo} alt="Logo"/>
  </div>
  <div >
  <p class='home'>Home</p>
  </div>
  <div class="signup">
    <button>Log in / Sign Up</button>
  </div>
</nav>
        </>
    );
};

export default Navbar;