import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function InputElement(props) {
  const {type, placeholder} = props;
  return (
    <>
    <input type={type} className="form-control" aria-describedby="emailHelp" placeholder={placeholder} />
    </>
  )
}