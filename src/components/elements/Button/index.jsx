import react from 'react'

export default function Button(props) {
  const {text} = props;
  
  return (
    <>
      <button type="submit" className="w-100 btn btn-primary mt-2 ">{text}</button>
    </>
  )
}