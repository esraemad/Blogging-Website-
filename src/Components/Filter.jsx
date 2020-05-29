import React from 'react';
import { Link } from 'react-router-dom';
const Filter = (props) => {
    return ( 
    <React.Fragment>

<aside className="single_sidebar_widget post_category_widget">
              <h4 className="widget_title">Post Catgories</h4>
              <ul className="list cat-list">
                {props.types.map(type=> 
                
                <li key={type.id} 
                onClick={()=> props.OnFilterChange (type)}>
                <Link to="/" className="d-flex justify-content-between">
                <p to="/" className={(type.id === props.activeFilter ? "d-flex justify-content-between" : "")}>{type.name}</p>
                    <p>37</p>
                </Link>
                 
                </li>)}
              </ul>
              <div className="br" />
            </aside>

    </React.Fragment>);
}
 
export default Filter;