import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function Input(props) {
  const {type = "text", placeholder} = props;
  
  return (
    <>
      <div className="form-group">
    <input type={type} className="form-control" aria-describedby="emailHelp" placeholder={placeholder} />
  </div>
  </>
  )
}