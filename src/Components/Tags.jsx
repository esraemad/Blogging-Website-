import React from 'react';
import { Link } from 'react-router-dom';
const Tags = (props) => {
  return (     <React.Fragment>

    <aside className="single-sidebar-widget tag_cloud_widget">
                  <h4 className="widget_title">Tag Clouds</h4>
              <ul className="list">

               {props.tagss.map(tag=> 
                
                <li key={tag.id} 
                onClick={()=> props.OnTagChange (tag)}>
                <Link to="/" className={(tag.id === props.activeTag ? "activelink" : "")}>{tag.name}</Link>
                 
                </li>)} 
           
            

                    </ul>
                </aside>
    


          {/* <li><a href="/">Trip</a></li>
                    <li><a href="/">Camp</a></li>
                    <li><a href="/">Sea</a></li>
                    <li><a href="/">Night</a></li>
                    <li><a href="/">Parks</a></li>
                    <li><a href="/">Historical</a></li>
                    <li><a href="/">Beach</a></li>
                    <li><a href="/">Sky</a></li>
                    <li><a href="/">Shopping</a></li>
                    <li><a href="/">Food</a></li>
                    <li><a href="/">Lifestyle</a></li>
                    <li><a href="/">Adventure</a></li> */}
    
              
         
        </React.Fragment>  );
}
 
export default Tags;