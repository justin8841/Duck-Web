import { checkProps } from "../interfaces/props";
import { useState } from "react";
import { newUser } from "./users";

const Password: React.FC<checkProps> = ({setPasswCheck})=>{
  const[pass, setPass] = useState("")
  const caracCheck = (pass: string)=>{
    const haveNum = /[0-9]/.test(pass);
    const haveBcarac = /[!@#$%^&*()+=[\]{};':"\\|,.<>/?]/.test(pass);
    let result = false;

    return(haveBcarac === false && haveNum === true )?   result = true  :  result
  }
  const handlePassw= (event:React.ChangeEvent<HTMLInputElement>)=>{
  const password= event.target.value
  setPass(password)
  caracCheck(password)
  if(pass.length >= 5  && caracCheck(password) === true) {
    newUser.password = password
    setPasswCheck?.(true)
  }else {
    setPasswCheck?.(false);
    console.log("password is failed")
  }
}
  return(
    <input type="password" placeholder='Password' value={pass} required onChange={handlePassw}/>
  )
}

export default Password