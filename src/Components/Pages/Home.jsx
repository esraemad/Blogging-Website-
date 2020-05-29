import React, { Component } from 'react';
import Footer from '../Footer';
import Tags from '../Tags';
import Filter from '../Filter';
import Pagination from '../Pagination';
import _ from 'lodash';
import BlogItem from '../BlogItem';
import Navclr from '../NavClr';
class Home extends Component {

  state = {  }
  
  render() { 

  //Filter Logic ====
  let filteredBlogs= this.props.Blogs;
  if (this.props.activeFilter)
  filteredBlogs = this.props.Blogs.filter(
      blog => blog.type === this.props.activeFilter
    );


    
  //Tags Logic ====
  // let TagseBlogs = this.props.Blogs;
  // if (this.props.activeTag)
  // TagseBlogs = this.props.Blogs.filter(
  //     blog => blog.type === this.props.activeTag
  //   );
    
    
  //Paging Logic  ==== Start Index
  const startIndex = (this.props.activePage - 1) * this.props.pageSize;
  let showedBlogs = _(filteredBlogs)
  .slice(startIndex)
  .take(this.props.pageSize)
  .value(); 


    if (showedBlogs.length === 0) {
    return (
      <React.Fragment>
        <Navclr></Navclr>


      <div className="center">
        <h1 style={{backgroundImage: '-webkit-linear-gradient(left, #ff2f8b, #9035f9)',marginTop:'150px',padding:
      '200px',color:'#fff'}}><i className="far fa-frown-open"></i> No Blogs found <i className="far fa-frown-open"></i> </h1>
      </div>
      </React.Fragment>
    );
  }




    return ( 
    <React.Fragment>

    <Navclr></Navclr>
 
  {/*================ Start Feature Area =================*/}
  <section className="feature-area section_gap_top">
    <div className="container">
      <div className="row align-items-end justify-content-left">
        <div className="col-lg-12">
          <div className="main_title">
            <p>We’re Offering these Popular Services</p>
            <h1>Getting Adventure with Services</h1>
            <span className="title-widget-bg" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================ End Feature Area =================*/}
  {/*================Blog Area =================*/}
  <section className="blog_area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="blog_left_sidebar">

            {/* <BlogList  Blogs= {props.Blogs}/> */}

          

            {showedBlogs.map(blg =>( <BlogItem
                key={blg.id}
                blgitm={blg}
            />
            ))}
            
           
            {/*================  Sart Pagination  =================*/}
           { filteredBlogs.length  > this.props.pageSize && ( 
            <Pagination 
                     pageCount={filteredBlogs.length/this.props.pageSize} 
                     activePage={this.props.activePage}
                     OnPageChange={this.props.OnPageChange}
              />
           )}
               
               {/*================  End Pagination  =================*/}

               
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="blog_right_sidebar">

          {/* <aside className="single_sidebar_widget author_widget">
              <div className="social_icon">
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-twitter" /></a>
                <a href="/"><i className="fab fa-github" /></a>
                <a href="/"><i className="fab fa-behance" /></a>
              </div>
              <p>We love hearing about your travel experiences and sharing your amazing trips with us </p>
              <div className="br" />
            </aside> */}

<aside className="single-sidebar-widget newsletter_widget">
              {/* <h4 className="widget_title">Newsletter</h4> */}
             
              <div className="form-group d-flex flex-row">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text"><i className="fas fa-search" style={{color:'#4c4c4cee'}}></i></div>
                  </div>
                  <input type="text" className="form-control entermail"
                   id="inlineFormInputGroup" 
                   placeholder="Search"
              
                   />
                </div>
                <a href="/" className="bbtns">Search</a>
              </div>
              <p className="text-bottom" style={{color:'#4c4c4cee'}}>You can Search Posts Here</p>
            </aside>
            <div className="br" />
            {/* <aside className="single_sidebar_widget search_widget">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Posts" />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier" /></button>
                </span>
              </div>
              <div className="br" />
            </aside> */}
        
          {/*  =================SART Filters ================= */}
                  <Filter
                   types={this.props.types}
                   activeFilter={this.props.activeFilter}
                   OnFilterChange={this.props.OnFilterChange}
                   />
           {/*  =================End Filters ================= */}

             {/* =================SART TAGS ================= */}
          <Tags
            tagss={this.props.tagss}
            activeTag={this.props.activeTag}
            OnTagChange={this.props.OnTagChange}
          />
          <div className="br" />
          {/* ================= END TAGS ================= */}
            <aside className="single_sidebar_widget popular_post_widget">
              <h3 className="widget_title">Popular Posts</h3>
              <div className="media post_item">
                <img src="img/blog/popular-post/post1.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>Space The Final Frontier</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="img/blog/popular-post/post2.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>The Amazing Hubble</h3>
                  </a>
                  <p>02 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="img/blog/popular-post/post3.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>Astronomy Or Astrology</h3>
                  </a>
                  <p>03 Hours ago</p>
                </div>
              </div>
              <div className="media post_item">
                <img src="img/blog/popular-post/post4.jpg" alt="post" />
                <div className="media-body">
                  <a href="blog-details.html">
                    <h3>Asteroids telescope</h3>
                  </a>
                  <p>01 Hours ago</p>
                </div>
              </div>
              <div className="br" />
            </aside>
     {/* filter was here */}

 

         
        {/* tags was here  */}

          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================Blog Area =================*/}

  
  {/* <!--================  Start Footer Area =================--> */}
    <Footer></Footer>
   {/* <!--================  End Footer Area =================--> */}

    </React.Fragment> );
  }
}
 
export default Home;