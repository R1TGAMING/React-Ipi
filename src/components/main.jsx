import React from "react"
import {useState, useEffect} from "react"

export default function Main(props) {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (name === props.name) {
      setAge(props.age)
    }
    
  }, [name])

  return (
    <>
      <p>hi {name}</p>
      <h2>umur : {age}</h2>
      <button onClick = {() => setName(props.name)}>Click</button>
  </>
  )
}