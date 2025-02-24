import { useState } from "react"
import { checkProps } from "./interfaces/props"


const Age:React.FC<checkProps> = ({setAgeCheck, newUser})=>{
  const[age, setAge]= useState<number | string >('')

  // Function to check if the age is valid. Simple validation and parsing of the age value
  function handleAge(event:React.ChangeEvent<HTMLInputElement>){ 
    event.preventDefault()
    const iValue = parseInt(event.target.value)
      setAge(iValue)

    if (iValue > 18 && newUser != undefined ) {
      newUser.age = JSON.stringify(iValue)
      setAgeCheck?.(true)
    }else {
      setAgeCheck?.(false)
      setAge(iValue)
    }
  }
  return(
    <>
    <label htmlFor="age">Age</label>
    <input type="number" value={age} required onChange={handleAge} className='age'/>
    </>
    
  )
}

export default Age