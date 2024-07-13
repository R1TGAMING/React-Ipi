import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Label(props) {
  const {children} = props;
  return (
    <>
    <label htmlFor={children}>{children}</label>
    </>
  )
}