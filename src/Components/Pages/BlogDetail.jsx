import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navclr from "../NavClr";
import Footer from "../Footer";

import axios from "axios";
// import avatar from '../../img/about-img.jpg'

const BlogDetail = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/blogs/${id}`)
    .then(({data}) => setBlog(data))

    axios.get(`http://localhost:3000/blogs`).then(({ data }) => {
      const blog = data.find((blog) => blog.id === +id);
      setBlog(blog);
    });
  }, [] );

  return (
    <React.Fragment>
      <Navclr></Navclr>

      {/* <!--================Home Banner Area =================--> */}
      <section className="banner_area ">
        <div
          className="banner_inner overlay d-flex align-items-center"
          style={{ background: "url(../img/banner/common-banner.jpg)" }}
        >
          <div className="container">
            <div className="banner_content">
              <div className="page_link">
                <Link to="/">Home</Link>
                <Link to="blogdetail">Blog Details</Link>
              </div>
              <h2>Blog Details</h2>
            </div>
          </div>
        </div>
      </section>
 
      {/* <!--================End Home Banner Area =================--> */}
  
      {/*================Blog Area =================*/}
      <section className="blog_area single-post-area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img
                      className="img-fluid"
                      src="/img/blog/feature-img1.jpg"
                      alt="picdetail"
                    />
                  </div>
                </div>
                <div className="col-lg-3  col-md-3">
                  <div className="blog_info text-right">
                    <div className="post_tag">
                      <a className="active" href="/">
                        Trip
                      </a>
                      <a href="/">{blog?.tags}</a>
                      <a href="/">Lifestyle</a>
                    </div>
                    <ul className="blog_meta list">
                      <li>
                        <a href="/">
                          Mark wiens<i className="far fa-user"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          12 Dec, 2017<i className="far fa-calendar-alt"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          1.2M Views<i className="far fa-eye"></i>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          06 Comments<i className="far fa-comment"></i>
                        </a>
                      </li>
                    </ul>
                    <ul className="social-links">
                      <li>
                        <a href="/">
                          <i className="fab fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-github" />
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <i className="fab fa-behance" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 blog_details">
                  <h2>{blog?.title}</h2>
                  <p className="excert">
                  {blog?.desc}
                  </p>
                  <p>
                    Boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed.
                  </p>
                </div>
              </div>

              <div className="comments-area">
                <h4>02 Comments</h4>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/img/blog/c1.jpg" alt="pic" />
                      </div>
                      <div className="desc">
                        <h5>
                          <a href="/">Emilly Blunt</a>
                        </h5>
                        <p className="date">December 4, 2017 at 3:12 pm </p>
                        <p className="comment">
                          Never say goodbye till the end comes!
                        </p>
                      </div>
                    </div>
                    <div className="reply-btn">
                      <a href className="btn-reply text-uppercase">
                        reply
                      </a>
                    </div>
                  </div>
                </div>
                <div className="comment-list left-padding">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img src="/img/blog/c2.jpg" alt="pic2" />
                      </div>
                      <div className="desc">
                        <h5>
                          <a href="/">Elsie Cunningham</a>
                        </h5>
                        <p className="date">December 4, 2017 at 3:12 pm </p>
                        <p className="comment">
                          Never say goodbye till the end comes!
                        </p>
                      </div>
                    </div>
                    <div className="reply-btn">
                      <a href className="btn-reply text-uppercase">
                        reply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget author_widget">
                  <img
                    className="author_img rounded-circle"
                    src="/img/blog/author.png"
                    alt="pic"
                  />
                  <h4>Charlie Barber</h4>
                  <p>Senior blog writer</p>
                  <div className="social_icon">
                    <a href="/">
                      <i className="fab fa-facebook" />
                    </a>
                    <a href="/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="/">
                      <i className="fab fa-github" />
                    </a>
                    <a href="/">
                      <i className="fab fa-behance" />
                    </a>
                  </div>
                  <p>
                    We love hearing about your travel experiences and sharing
                    your amazing trips with us
                  </p>
                  <div className="br" />
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title">Popular Posts</h3>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post1.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Space The Final Frontier</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post2.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post3.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="/img/blog/popular-post/post4.jpg" alt="post" />
                    <div className="media-body">
                      <a href="blog-details.html">
                        <h3>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                  <div className="br" />
                </aside>

                <aside className="single-sidebar-widget newsletter_widget">
                  <h4 className="widget_title">Newsletter</h4>
                  <p>
                    Here, I focus on a range of items and features that we use
                    in life without giving them a second thought.
                  </p>
                  <div className="form-group d-flex flex-row">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-envelope" aria-hidden="true" />
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder="Enter email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                      />
                    </div>
                    <a href="/" className="bbtns">
                      Subcribe
                    </a>
                  </div>
                  <p className="text-bottom">You can unsubscribe at any time</p>
                  <div className="br" />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================Blog Area =================*/}

      <Footer></Footer>
    </React.Fragment>
  );
};

export default BlogDetail;
