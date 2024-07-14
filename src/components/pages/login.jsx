import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {useState} from "react";

import Input from "../elements/Input"
import Button from "../elements/Button"



export default function Login() {
  const {value, setValue} = useState('')
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(value)
  }
  
  return (
    <>
    <form onSubmit = {handleSubmit}>
      <div className="container">
        <div className="d-flex justify-content-center mr-auto ml-auto mt-3">
          <div className="form-group">
          <Input type = "email" placeholder = "example@email.com " children = "email" name="email" value={(e) => setValue(e)}/>
          <Input type = "password" placeholder = "***** " children = "password" name="password"/>
          <Button text = "Login"/>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}