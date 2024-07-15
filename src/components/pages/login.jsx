import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useState} from "react";

import Auth from "../layouts/auth";



export default function Login() {
  const {value, setValue} = useState('')
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target[1].value)
  }
  
  return (
    <>
    <form onSubmit = {handleSubmit}>
      <Auth />
          
    </form>
    </>
  )
}