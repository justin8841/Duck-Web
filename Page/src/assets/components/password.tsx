import { checkProps } from "./interfaces/props";
import { useState } from "react";

const Password: React.FC<checkProps> = ({setPasswCheck, newUser})=>{
  const[pass, setPass] = useState("")

  // Function to check if password don't have special characters
  const caracCheck = (pass: string)=>{
    const haveNum = /[0-9]/.test(pass);
    const haveBcarac = /[!@#$%^&*()+=[\]{};':"\\|,.<>/?]/.test(pass);
    let result = false;
    return(haveBcarac === false && haveNum === true )?   result = true  :  result
  }

  // Function to check if password is valid and set the password in the newUser object
  const handlePassw= (event:React.ChangeEvent<HTMLInputElement>)=>{
  const password= event.target.value
  setPass(password)
  caracCheck(password)
  if(pass.length >= 5  && caracCheck(password) === true && newUser != undefined) {
    newUser.password = password
    setPasswCheck?.(true)
  }else {
    setPasswCheck?.(false);
  }
}
  return(
    <input type="password" placeholder='Password' value={pass} required onChange={handlePassw}/>
  )
}

export default Password