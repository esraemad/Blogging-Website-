import React, { Component } from "react";

import Joi from "joi-browser";
import Input from "../input";
import { Link } from "react-router-dom";


class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
      isSaved: false
    },
    errors: {}
  };

  schema = {
    username: Joi.string().required().label('Email'),
    password:Joi.string().required().label('Password').min(4),
  };
  //   username = React.createRef();

  ///////////////////////////HandelSubmit/////////////////////////////
  HandleSubmit = e => {
    e.preventDefault();

    //Validation :
    const errors = this.validate();

    if (errors) {
      console.log(errors);
      this.setState({ errors });
      return;
    
    }

    //valid
    this.setState({ errors: {} });
    //Call backend
    console.log("Done!");
    this.props.history.replace("/");
  };

    ///////////////////////////Validation/////////////////////////////

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
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
    const account = { ...this.state.account };
    const errors = { ...this.state.errors };
    //Edit
    account[target.id] = target.value;
    //Validate
    const error = this.validateInput({ [target.id]: target.value }, target.id);
    if (error === null) {
      delete errors[target.id];
    } else {
      errors[target.id] = error.message;
    }
    //Set Satate
    this.setState({ account, errors });
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



  render() {
    return (
<React.Fragment>

<div className="container-contact100" style={{background: 'url(../img/banner/common-banner.jpg)',
backgroundSize: 'cover' , backgroundPosition:'bottom'
}}>
  <div className="wrap-contact100">
    <Link className="navbar-brand logo_h centerlogo" to="/"><img src="img/download.png" alt="piclogin" /></Link>

    <form className="contact100-form validate-form" onSubmit={this.HandleSubmit}>
      <span className="contact100-form-title" style={{fontFamily:'apple-system,BlinkMacSystemFont,"Segoe UI"',fontWeight:'bold',padding:'0',marginBottom:'10px'}}>
        LOGIN
      </span>

  <div>  

  {/* wrap-input100 validate-input input-group-prepend  */}

 <div className=" input-group-prepend ">
  <i class="fas fa-envelope" style={{color:'#4c4c4cee' , marginTop:'13px'}}></i>&nbsp;
  
      <Input  
          name="username"
          type="email"
          placeholder="Email"
          value={this.state.account.username}
          error={this.state.errors.username}
          onChange={this.HandleChange}
        />
      
      </div> 
      </div>

      <span className="focus-input100" />

      <div>
      {/* <div className="wrap-input100 validate-input input-group-prepend"> */}
      <div className="input-group-prepend">

       <i class="fas fa-lock" style={{color:'#4c4c4cee', marginTop:'13px'}}></i>
      <Input
            name="password"
            type="Password"
            placeholder="Password"
            value={this.state.account.password}
            error={this.state.errors.password}
            onChange={this.HandleChange}
          />
        <span className="focus-input100" />
       </div>

        
      </div>
      
      <div className="container-contact100-form-btn">
        <div className="wrap-contact100-form-btn">
          <div className="contact100-form-bgbtn" />
          <button className="contact100-form-btn">
            <span>
             Sign In   &nbsp;&nbsp;
              <i className="fas fa-long-arrow-alt-right"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</div>


    </React.Fragment>   );
    
  }
}

export default Login;
