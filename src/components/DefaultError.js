import React from "react";
import { Link } from "react-router-dom";
import error from '../images/error.svg'

const DefaultError = () => {
  return (
    <div style={{display: 'grid', placeItems: 'center', height: '90vh'}}>
      <div>

      
      <h1>Oops...nothing to see here</h1>
      <p>
        You must <Link to="/">Login</Link> to use this feature.
      </p>
      <img src={error} style={{width: '550px'}}/>
      </div>
    </div>
  );
};

export default DefaultError;