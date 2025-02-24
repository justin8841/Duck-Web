import { checkProps } from "./interfaces/props";
import { useState } from "react";

const Email: React.FC<checkProps> = ({setEmailCheck, newUser})=>{
  const [mail, setMail] = useState<string>('')

  // Function to check if the email is valid . Simple validation and check if the email contains "_"
  const handleMail= (event:React.ChangeEvent<HTMLInputElement>)=>{
    const newMails = event.target.value;
    setMail(newMails)
    if (newUser != undefined) {
      if(newMails.includes("_") && newUser === undefined) {
      setEmailCheck?.(false)
      console.log("email is failed")
    } else {
      newUser.email = newMails
      setEmailCheck?.(true)
    }
  }
    
  }
  return(

    <>
    <label htmlFor="email">Email</label>
    <input type="email" value={mail} placeholder='example@gmail.com' required onChange={handleMail}/>
    </>
    
  )
}


export default Email