import React from 'react';
import Nav from './Nav';

const Header = (props) => {
    return ( 
    <React.Fragment>
     
     <Nav></Nav>
   
  {/*================ Start Home Banner Area =================*/}
  <section className="home_banner_area"  
  style={{ backgroundImage: 'url("../img/banner/home-banner.png")' }} >
    <div className="banner_inner">
      <div className="container">
        <div className="row fullscreen d-flex align-items-center justify-content-center">
          <div className="banner_content">
            <p>Share Your Amazing Trip With Us</p>
            <h2>Taxa Adventure</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================ End Home Banner Area =================*/}

    </React.Fragment> );
}
 
export default Header;