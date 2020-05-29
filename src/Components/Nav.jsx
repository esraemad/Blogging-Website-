import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = (props) => {
    return (
     <React.Fragment>
       {/*================ Start Header Menu Area =================*/}
  <header className="header_area">
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <Link className="navbar-brand logo_h" to="/"><img src="/img/logo.png" alt="pic1" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse offset" id="navbarSupportedContent">

            <ul className="nav navbar-nav ml-auto">
              {/* <li className="nav-item">
                <NavLink to="/login" className="primary-btn">LOGIN</NavLink>
              </li> */}
              <li className="nav-item m-5">
                {/* <NavLink to="/logout" className="primary-btn"> Logout <i className="fas fa-sign-out-alt"></i> </NavLink> */}
                <NavLink to="/register" className="primary-btn">SiGN UP</NavLink>	&nbsp; &nbsp;	&nbsp; 
                <NavLink to="/login" className="primary-btn">SiGN IN</NavLink>
              </li>
             
           
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  {/*================ End Header Menu Area =================*/}
    </React.Fragment> );
}
 
export default Nav;