import React from 'react';
import Footer from '../Footer';
import BlogStart from '../BlogStart';
import Pagination from '../Pagination';
import _ from 'lodash';
import Header from '../Header';


const GetStart = (props) => {

    //Paging Logic  ==== Start Index
    const startIndex = (props.activePage - 1) * props.pageSize;
    let showedBlogs = _(props.Blogs)
    .slice(startIndex)
    .take(props.pageSize)
    .value(); 
  
  

    return ( 
    <React.Fragment>
  {/*================ Start Home Banner Area =================*/}
       <Header></Header>

  {/*================ End Home Banner Area =================*/}
 
  {/*================ Start Trip Package Area =================*/}
<section className="package-area section_gap_top" style={{marginTop:'100px'}}>
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-lg-12">
        <div className="main_title">
          <p>We’re Offering these Trip Packages</p>
          <h1>Famous Trips Packages</h1>
          <span className="title-widget-bg" />
        </div>
      </div>
    </div>
    <div className="row">
    {showedBlogs.map(blg =>( <BlogStart
                key={blg.id}
                blgitm={blg}
            />
            ))}
    </div>
  </div>	
</section>
{/*================ End Trip Package Area =================*/}

    <div>
    <Pagination 
                     pageCount={props.Blogs.length/props.pageSize} 
                     activePage={props.activePage}
                     OnPageChange={props.OnPageChange}
              />
        
    </div>
     
    <Footer></Footer>
    </React.Fragment> );
}
 
export default GetStart;