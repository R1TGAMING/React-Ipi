import Input from "../elements/Input"
import Button from "../elements/Button"

export default function FormLogin() {

  return (
    <>
    <div className="form-group">
          <Input type = "email" placeholder = "example@email.com " children = "email" name="email" value={(e) => setValue(e)}/>
          <Input type = "password" placeholder = "***** " children = "password" name="password"/>
          <Button text = "Login"/>
    </div>
    </>
  )
}