import React from 'react';
import { Link } from 'react-router-dom';
const BlogStart = (props) => {
    return ( 
    <React.Fragment>

    <div className="col-lg-4 col-md-6">
        <div className="single-package">
          <div className="thumb">
            <img className="img-fluid" src="img/package/p1.jpg" alt="pic" />								
          </div>
          <p className="date" style={{color:'#777777',fontWeight:'100'}}><span>18</span> <br /> December</p>
          <div className="meta-top d-flex" style={{color:'#777777',fontWeight:'100'}} >
            <p><span className="fa fa-location-arrow" /> {props.blgitm.username}</p>
            <p className="ml-20"><span className="fa fa-calendar" />{props.blgitm.tags}</p>
          </div>
          <h4>{props.blgitm.title}</h4>
          <p style={{color:'#777777',fontWeight:'100'}}>
          {props.blgitm.desc}
          </p>
          <Link to="/login" className="primary-btn">Read More</Link>
        </div>
      </div>
   
    </React.Fragment>);
}
 
export default BlogStart;