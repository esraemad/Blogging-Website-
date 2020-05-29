import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Joi from 'joi-browser';
import axios from 'axios';

import NavClr from '../NavClr';
import InputBlog from '../InputBlogs';
import TextareaBlog from '../TextareaBlog';
import Footer from '../Footer';

class BlogForm extends Component {
  state = {
    blogform: {
      id:"0",
      title: "",
      desc: "",
      type: 0,
      tags:"",
      //imgurl:"",
    },
    errors: {}
  };

  schema = {
    title: Joi.string().required().label('Title').min(4),
    desc:Joi.string().required().label('desc').min(4),
    type:Joi.number(),
    tags:Joi.string().required().label('Tags'),
    //imgurl:Joi.string(),
    id:Joi.string(),
  };
  //   username = React.createRef();

  ///////////////////////////HandelSubmit/////////////////////////////
  // HandleSubmit = e => {
  //   e.preventDefault();

  //   //Call Back End
   
  //   //Validation :
  //   const errors = this.validate();

  //   if (errors) {
  //     console.log(errors);
  //     this.setState({ errors });
  //     return;
  //   }

  //   //valid
  //   this.setState({ errors: {} });
  //   //Call backend
  //   console.log("Done!");
  // };

  HandleSubmit = async e => {
    e.preventDefault();
    //Make Object to post
    const blogform = { ...this.state.blogform };

    delete blogform.id;
    //CallBackEnd
    const { data } = await axios.post(
      "http://localhost:3000/Blogs",
      blogform
    );
    console.log(data);
    //Update State
    this.props.onAdd(data);
    //Redirect to Home Page
    this.props.history.replace("/");
  };

    ///////////////////////////Validation/////////////////////////////
  validate = () => {
    const result = Joi.validate(this.state.blogform, this.schema, {
      abortEarly: false
    });
    //No Errors
    if (result.error === null) {
      return null;
    }
    //Errors
    const errors = {};
    for (const error of result.error.details) {
      errors[error.path] = error.message;
    }
    return errors;
  };

    ///////////////////////////HandelChange/////////////////////////////

  HandleChange = ({ target }) => {
    //Clone
    const blogform = { ...this.state.blogform };
    const errors = { ...this.state.errors };
    //Edit
    blogform[target.id] = target.value;
    //Validate
    const error = this.validateInput({ [target.id]: target.value }, target.id);
    if (error === null) {
      delete errors[target.id];
    } else {
      errors[target.id] = error.message;
    }
    //Set Satate
    this.setState({ blogform, errors });
  };
      ///////////////////////////Validate On Change /////////////////////////////

      validateInput = (property, name) => {
        //Sub Schema
        const schema = { [name]: this.schema[name] };
        //validate using Joi
        const { error } = Joi.validate(property, schema);
        if (error === null) return null;
        return error.details[0];
      };
    
 ///////////////////////////Validate On Change /////////////////////////////

      Handeldropdown = ({target}) => {
        //Clone
        const blogform = { ...this.state.blogform };
        //Edit
        blogform[target.id] = parseInt(target.value);
        //Set Satate
        this.setState({ blogform });
    }

  render() { 
    return (   
      <React.Fragment>
      <NavClr></NavClr>
{/* <!--================Home Banner Area =================--> */}

<section className="banner_area ">
<div className="banner_inner overlay d-flex align-items-center" style={{background: 'url(../img/banner/common-banner.jpg)'}}>
  <div className="container">
    <div className="banner_content">
      <div className="page_link">
        <Link to="/">Home</Link>
        <Link to="blogform">Blog</Link>
      </div>
      <h2>Add Blog</h2>
    </div>
  </div>
</div>
</section>

{/* <!--================End Home Banner Area =================--> */}
{/* *********************** START FORM *********************** */}

<div className="container">
<div className="blog-form" style={{marginTop:'50px', marginBottom:'100px'}}>
    <p className="lead">
    <i className="fas fa-share"></i> Share Your Trip
    </p>
    <div className="addblog text-light p-2 p">
      <h3 className="widget_title" style={{color:'#fff',lineHeight:'40px',height:'35px'}}>Create New Blog</h3>
    </div>
    <form className="form my-1" onSubmit={this.HandleSubmit}>
      <div className="form-group">
        <div className="form-group">
          <label htmlFor="title">Title</label>
         
          <InputBlog
            name="title"
            type="text"
            value={this.state.blogform.title}
            error={this.state.errors.title}
            onChange={this.HandleChange}
            
          />

        </div>

        <label htmlFor="desc">desc</label>

          <TextareaBlog
            name="desc"
            type="text"
            value={this.state.blogform.desc}
            error={this.state.errors.desc}
            onChange={this.HandleChange}
            
          />
        <div className="form-group mt-2">
                    <label>Activity</label>
                    <select
                     className="form-control"
                       id="type"
                       name="type" 
                       value={this.state.blogform.type}
                       onChange={this.Handeldropdown}>
                          {this.props.types.map(type =>  
                          <option key={type.id} value={type.id}>{type.name}</option> )}
                    </select>
                  </div>
        
        {/* <div className="form-group mt-2">
          <label htmlFor="select">Select type</label>
          <select
            className="form-control"
            name="type"
            id="select"
            value={this.state.Blogs.type}
            onChange={this.HandleChange}

          >
              {this.props.types.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
          </select>
        </div> */}


        <div className="form-group">
          <label htmlFor="tags">Tags</label>
        </div>

        <InputBlog
            name="tags"
            type="text"
            value={this.state.blogform.tags}
            error={this.state.errors.tags}
            onChange={this.HandleChange}
            
          />
          <small className="form-text text-muted">
            Please use comma separated values (eg. HTML,CSS,JavaScript)
          </small>
          <br></br>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Upload</span>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="photo"
              name="photoData"
              
            />
            <label className="custom-file-label" htmlFor="photo">
              Choose file
            </label>
          </div>
        </div>

      </div>

      <button className="btn btn-dark my-1" style={{ border: '1px solid #ff2f8b',
       background: '#ff2f8b'}}>
        Publish
      </button>
    </form>
  </div>
  </div>

{/* *********************** End FORM *********************** */}

 <Footer></Footer>
  </React.Fragment>  );
  }
}
 
export default BlogForm;