import React from 'react';
import _ from 'lodash';
const Pagination = (props) => {
    const pages = _.range(1,props.pageCount+1)
    return ( 
    <React.Fragment>

<nav className="blog-pagination justify-content-center d-flex">
              <ul className="pagination">

    {pages.map(page =>  
    <li 
    key = {page}
    className={props.activePage === page ? " page-item active " : "page-item"}>
        <p onClick={()=>props.OnPageChange(page)} 
          className="page-link">{page}</p></li>)}
        
       
              </ul>
            </nav>

    </React.Fragment> );
}
 
export default Pagination;