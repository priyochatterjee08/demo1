import React from 'react';
import Logo1 from '../wig.png'
import Logo2 from '../linkedin-w.png'
import Logo3 from '../wfb.png'
import Logo4 from '../2021 Twitter logo - white.png'




function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          
          <div className="col-md-6">
            <div className="footer-logo">
              {/* <img src={Logo5} alt="Logo 2" /> */}
              {/* <h3>Nanostuffs pvt ltd</h3> */}
            </div>
            <p>&copy; 2023 Nanostuffs pvt ltd. All rights reserved.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="footer-icon">
              <a href="https://www.instagram.com/nanostuffs/"><img src={Logo1} alt="Instagram" /></a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-icon">
              <a href="https://twitter.com/nanostuffs?lang=en"><img src={Logo4} alt="Twitter" /></a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-icon">
              <a href="https://www.facebook.com/nanostuffs/"><img src={Logo3} alt="Facebook" /></a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-icon">
              <a href="https://in.linkedin.com/company/nanostuffs-technologies"><img src={Logo2} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


