import React from 'react';
import './Navbar.css';
import logo from '../../../assetes/logo.png'

const Navbar = () => {
    return (
        <>

<nav>
  <div class="logo">
   <a href="#home"> <img src={logo} alt="Logo"/></a>
  </div>
  <div >
 

  <p class='home'> <a href="#home">Home</a></p>
  </div>
  <div class="signup">
    <button>Log in / Sign Up</button>
  </div>
</nav>
        </>
    );
};

export default Navbar;