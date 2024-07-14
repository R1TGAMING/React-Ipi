import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function InputElement(props) {
  const {type, placeholder, name, value} = props;
  return (
    <>
    <input name={name} type={type} className="form-control" placeholder={placeholder} value={value}/>
    </>
  )
}