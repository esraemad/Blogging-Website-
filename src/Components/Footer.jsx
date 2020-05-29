import React from 'react';
const Footer = (props) => {
    return ( 
    <React.Fragment>

{/* <!--================  Start Footer Area =================--> */}

<footer className="footer-area">
  <div className="footer_top section_gap_top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h5 className="footer_title">About Agency</h5>
            <p className="about-text">The world has become so fast paced that people don’t want to stand by reading a page of information, they would much rather look at a presentation and understand the message. It has come to a point where images and videos are used more to </p>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h5 className="footer_title">Navigation Links</h5>
            <div className="row">
              <div className="col-5">
                <ul className="list">
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Features</a></li>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Portfolio</a></li>
                </ul>
              </div>
              <div className="col-5">
                <ul className="list">
                  <li><a href="/">Team</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="single-footer-widget">
            <h5>Newsletter</h5>
            <p>For business professionals caught between high OEM price and mediocre print and graphic output, </p>
            <div className="footer-newsletter" id="mc_embed_signup">	
              <form target="_blank" className="form-inline">
                <div className="d-flex flex-row">
                  <input className="form-control" name="EMAIL" placeholder="Enter Email" />
                  <button className="click-btn btn btn-default"><i className="far fa-paper-plane"></i></button>
                  <div style={{position: 'absolute', left: '-5000px'}}>
                    <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex={-1} defaultValue type="text" />
                  </div>
                </div>
                <div className="info" />
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-6 col-sm-6">
          <div className="single-footer-widget mail-chimp">
            <h5 className="mb-20">Instragram Feed</h5>
            <ul className="instafeed d-flex flex-wrap">
              <li><img src="/img/i1.jpg" alt="p1" /></li>
              <li><img src="/img/i2.jpg" alt="p2" /></li>
              <li><img src="/img/i3.jpg" alt="p3" /></li>
              <li><img src="/img/i4.jpg" alt="p4" /></li>
              <li><img src="/img/i5.jpg" alt="p5" /></li>
              <li><img src="/img/i6.jpg" alt="p6" /></li>
              <li><img src="/img/i7.jpg" alt="p7" /></li>
              <li><img src="/img/i8.jpg" alt="p8" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <p>
            Copyright © All rights reserved 
             BY  ESRA EMAD  <i className= " far fa-heart "> </i> 
          </p>
        </div>
        <div className="col-lg-6 col-md-12 text-right">
          <div className="social-icons">
            <a href="/"><i className="fab fa-facebook" /></a>
            <a href="/"><i className="fab fa-twitter" /></a>
            <a href="/"><i className="fab fa-dribbble" /></a>
            <a href="/"><i className="fab fa-behance" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

{/* <!--================ End Footer Area =================--> */}


    </React.Fragment> );
}
 
export default Footer;