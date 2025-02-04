import { useState } from "react"
import { checkProps } from "./interfaces/props"


const Age:React.FC<checkProps> = ({setAgeCheck, newUser})=>{
  const[age, setAge]= useState<number | string >('')
  function handleAge(event:React.ChangeEvent<HTMLInputElement>){ 
    event.preventDefault()
    const iValue = parseInt(event.target.value)
      setAge(iValue)
    console.log(newUser)

    if (iValue > 18 && newUser != undefined ) {
      console.log(newUser)
      newUser.age = JSON.stringify(iValue)
      setAgeCheck?.(true)
    }else {
      setAgeCheck?.(false)
      console.log("you are a kid!")
      setAge(iValue)
    }
  }
  return(
    <input type="number" value={age} placeholder='Age' required onChange={handleAge} className='age'/>
  )
}

export default Age