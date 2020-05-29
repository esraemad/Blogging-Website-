import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const Navclr = (props) => {
    return (
     <React.Fragment>
     {/*================ Start Header Menu Area =================*/}
     <header className="header_area" style={{backgroundColor:'rgb(4, 9, 30,0.9)'}}>
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
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="profile">Profile</NavLink></li>
              <li className="nav-item submenu dropdown">
                <NavLink to="/blogs/add" className="nav-link dropdown-toggle" >Add Blog</NavLink>
              </li>
              <li className="nav-item submenu dropdown">
                <NavLink to="" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</NavLink>
                <ul className="dropdown-menu">
                  <li className="nav-item"><NavLink className="nav-link" to="/addblog">Blog</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/blogdetail">Blog Details</NavLink></li>
                </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/users">Followers</Link></li>
            </ul>
            <ul className="nav navbar-nav ml-auto">
         
            <li className="nav-item">
                <NavLink to="/logout" className="primary-btn"> Logout <i className="fas fa-sign-out-alt"></i> </NavLink>
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
 
export default Navclr;