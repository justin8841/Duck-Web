import Age from './age';
import Email from './email';
import Password from './password';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/form.css'
import { newUser } from './users';



  
const Form:React.FC = ()=>{
  const [req, setReq] = useState<string>('')
  const [ageCheck, setAgeCheck] = useState<boolean>(false)
  const [nameCheck, setNameCheck] = useState<boolean>(false)
  const [emailCheck, setEmailCheck] = useState<boolean>(false)
  const [passwCheck, setPasswCheck] = useState<boolean>(false)
  
  const toPage = useNavigate()
  const handleChange= (event:React.ChangeEvent<HTMLInputElement>)=>{
    const newChanges = event.target.value;
    setReq(newChanges)
    if(newChanges.length > 2) {
      setNameCheck(true)
      newUser.name = newChanges
      
    }
  }
    
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  if( emailCheck === true && nameCheck === true && ageCheck === true && passwCheck === true){  
    localStorage.setItem("user1",JSON.stringify(newUser))
    toPage("/assets/components/landing-page")
  }else {
    alert("something is wrong")
  }
  }
  return(
    <div className='form-container'>
      <form  onSubmit={handleSubmit} className='Inp-container'>
        <div className='logo-container'><img src="/images/new-duck-logo.jpeg" alt="logo" /></div>
        <input type="text"  placeholder='Username' onChange={handleChange}/>
        <p> Welcome <b>{req}</b></p>
        <Email setEmailCheck={setEmailCheck}></Email>
        <Age setAgeCheck={setAgeCheck}></Age>
        <Password setPasswCheck={setPasswCheck}></Password>
        <select name="biological sex"  className='election'>
          <option value="Man" className='male' >Man</option>
          <option value="Woman" className='female' >Woman</option>
        </select>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default Form