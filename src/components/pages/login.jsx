import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Input from "../elements/Input"
import Button from "../elements/Button"



export default function Login() {
  return (
    <>
    <form>
      <div className="container">
        <div className="d-flex justify-content-center mr-auto ml-auto mt-3">
          <div className="form-group">
          <Input type = "email" placeholder = "example@email.com " children = "email"/>
          <Input type = "password" placeholder = "***** " children = "password"/>
          <Button text = "Login"/>
          </div>
        </div>
      </div>
    </form>
    </>
  )
}