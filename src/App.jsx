import './App.css'
import React from "react"
import Input from "./components/elements/Input"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center mr-auto ml-auto mt-3">
          <Input type="text" placeholder="Enter your name" />
        </div>
      </div>
    </main>
  )
}

