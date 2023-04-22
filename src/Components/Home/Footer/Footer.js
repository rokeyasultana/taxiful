import React from 'react';
import './Footer.css';
import logo from '../../../assetes/logo.png'
const Footer = () => {
    return (
        <div>
 <footer class="footer-distributed">

<div class="footer-left">
<img class='footerLogo' src={logo} alt="" />


  <p class="footer-company-name">Taxiful © 2023</p>
</div>

<div class="footer-center">

  <div>
    <i class="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
  </div>

  <div>
    <i class="fa fa-phone"></i>
    <p>+1.555.555.5555</p>
  </div>

  <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@taxiful.com</a></p>
  </div>

</div>

<div class="footer-right">

  <p class="footer-company-about">
    <span>About the company</span>
   Taxiful is a taxi company in Perth providing premium customer service at standard taxi rates. We are not a dispatch company but a group of highly experienced, individual taxi drivers based all across the Greater Perth area, united in our goal of providing an excellent taxi service at all times, without charging extra for that service.
  </p>

  

</div>

</footer>
        </div>
    );
};

export default Footer;