import React from 'react';
import UsersList from '../UserList';
import Navclr from '../NavClr';
import { Link } from 'react-router-dom';


const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Max Schwarz',
      image:"img/team/team-1.jpg",
      places: 3
    }
  ];

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
          <Link to="users">Users</Link>
        </div>
        <h2>Users</h2>
      </div>
    </div>
  </div>
</section>

{/* <!--================End Home Banner Area =================--> */}
<br></br>
  <UsersList items={USERS} />
 </React.Fragment>
  );};

export default Users;
