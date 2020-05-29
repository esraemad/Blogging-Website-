import React from 'react';
import { Link } from 'react-router-dom';
const BlogItem = (props) => {
    return (
   <React.Fragment>
      
       <article className="row blog_item">
              <div className="col-md-3">
                <div className="blog_info text-right">
                  <div className="post_tag">
                    <a href="/">Food</a>
                    <a className="active" href="/">{props.blgitm.tags}</a>
                    <a href="/">Camp</a>
                  </div>
                  <ul className="blog_meta list">
                  <li><a href="/">{props.blgitm.username}<i className="far fa-user"></i></a></li>
                    <li><a href="/">12 Dec, 2017<i className="far fa-calendar-alt"></i></a></li>
                    <li><a href="/">1.2M Views<i className="far fa-eye"></i></a></li>
                    <li><a href="/">06 Comments<i className="far fa-comment"></i></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="blog_post">
                  <img src="img/blog/main-blog/m-blog-5.jpg" alt="p3" />
                  <div className="blog_details">
                    <a href="single-blog.html">
                     <h2>{props.blgitm.title}</h2>
                   
                    </a>
                      <p>{props.blgitm.desc}</p>
                      <Link to={`/blogdetail/${props.blgitm.id}`}  className="blog_btn">View More  </Link>
                      {/* onClick={()=>props.(props.blgitm) */}
                  </div>
                </div>
              </div>
            </article>
          

    </React.Fragment> );
}
 
export default BlogItem;