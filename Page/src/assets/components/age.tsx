import { useState } from "react"
import { checkProps } from "../interfaces/props"
import { newUser } from "./users"

const Age:React.FC<checkProps> = ({setAgeCheck})=>{
  const[age, setAge]= useState<number | string >('')
  function handleAge(event:React.ChangeEvent<HTMLInputElement>){ 
    event.preventDefault()
    const iValue = parseInt(event.target.value)
      setAge(iValue)
    if (iValue === 0 && iValue <= 18) {
      setAgeCheck?.(false)
      console.log("age is failed")
      throw console.error("Please write your age");
    } else if (iValue <= 18) {
      setAgeCheck?.(false)
      console.log("you are a kid!")
      setAge(iValue)
    }else {
      console.log("Your welcome")
      newUser.age = JSON.stringify(iValue)
      setAgeCheck?.(true)
    }
  }
  return(
    <input type="number" value={age} placeholder='Age' required onChange={handleAge} className='age'/>
  )
}

export default Age