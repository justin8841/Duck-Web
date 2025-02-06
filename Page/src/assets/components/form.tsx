import Age from './age';
import Email from './email';
import Password from './password';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkProps } from './interfaces/props';
import './styles/form.css'



  
const Form:React.FC<checkProps> = ({newUser})=>{
  const [req, setReq] = useState<string>('')
  const [ageCheck, setAgeCheck] = useState<boolean>(false)
  const [nameCheck, setNameCheck] = useState<boolean>(false)
  const [emailCheck, setEmailCheck] = useState<boolean>(false)
  const [passwCheck, setPasswCheck] = useState<boolean>(false)
  const [cuak, setCuack] = useState(true)
  
  const toPage = useNavigate()
  const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
    const newChanges = event.target.value;
    setReq(newChanges)
    if(newChanges.length > 2 && newUser != undefined) {
      setNameCheck(true)
      newUser.name = newChanges
    }
  }
    
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  if( emailCheck === true && nameCheck === true && ageCheck === true && passwCheck === true){  
    localStorage.setItem("user1",JSON.stringify(newUser))
    setCuack(true)
    toPage("/assets/components/landing-page")
    
  }else {
    console.log('something is wrong')
    setCuack(false)}
  
  }
  return(
    <div className='form-container'>
      <form  onSubmit={handleSubmit} className='Inp-container'>
        <div className='logo-container'>
          <img src="/images/new-duck-logo.jpeg" alt="logo" className='logo' />
        </div>
        <input type="text"  placeholder='Username' onChange={handleChange}/>
        <p className='welcome'> Welcome <b>{req}</b></p>
        {(cuak ? '' : (
          <div className='fail-alert'>
            <p className='incorrect'>Something is wrong</p>
          </div>
        ))}
        <Email setEmailCheck={setEmailCheck} newUser = {newUser}></Email>
        <Age setAgeCheck={setAgeCheck } newUser = {newUser}></Age>
        <Password setPasswCheck={setPasswCheck} newUser = {newUser}></Password>
        <select name="biological sex"  className='election'>
          <option value="Man" className='male' >Man</option>
          <option value="Woman" className='female' >Woman</option>
        </select>
        <button className='submit'>Submit</button>
      </form>

    </div>
  )
}

export default Form