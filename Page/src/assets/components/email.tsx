import { checkProps } from "../interfaces/props";
import { useState } from "react";
import { newUser } from "./users";

const Email: React.FC<checkProps> = ({setEmailCheck})=>{
  const [mail, setMail] = useState<string>('')
  const handleMail= (event:React.ChangeEvent<HTMLInputElement>)=>{
    const newMails = event.target.value;
    setMail(newMails)
    if(newMails.includes("_")) {
      setEmailCheck?.(false)
      console.log("email is failed")
    } else {
      newUser.email = newMails
      setEmailCheck?.(true)
    }
  }
  return(
    <input type="email" value={mail} placeholder='Email' required onChange={handleMail}/>
  )
}


export default Email