import React from 'react';
import Navclr from '../NavClr';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
const Profile = (props) => {
    return (
     <React.Fragment>
         <Navclr></Navclr>
        {/* <!--================Home Banner Area =================--> */}
<section className="banner_area ">
  <div className="banner_inner overlay d-flex align-items-center" style={{background: 'url(../img/banner/common-banner.jpg)'}}>
    <div className="container">
      <div className="banner_content">
        <div className="page_link">
          <Link to="/">Home</Link>
          <Link to="profile">Profile</Link>
        </div>
        <h2>Profile</h2>
      </div>
    </div>
  </div>
</section>
<br></br>
{/* <!--================End Home Banner Area =================--> */}

<Footer></Footer>
    </React.Fragment>);
}
 
export default Profile;