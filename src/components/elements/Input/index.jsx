import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import InputElement from "./input"
import Label from "./label"

export default function Input(props) {
  const {type, placeholder, children} = props;
  
  return (
    <>
      <Label children = {children}></Label>
      <InputElement type={type} placeholder={placeholder} />
    
  </>
  )
}