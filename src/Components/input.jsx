import React from "react";

const Input = props => {
  const { name, value, error, onChange,placeholder,type } = props;
  return (
    <div className="form-group inptfromcntrl" style={{marginBottom:'35px'}}>
      <input
        id={name}
        name={name}
        type={type}
        // className="form-control"
        //  className="input100"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      
      />
      
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
      {error && <div className="error"> {error}<i className="fa fa-times-circle"></i></div>}

    </div>
  );
};

export default Input;
