import { useNavigate } from "react-router-dom"
import './styles/intro.css'



const Welcome = ()=>{
 
  // Function to navigate to the form page
    const navigate = useNavigate()
    const handleForm = ()=>{
      navigate("/assets/components/form")
    }
    const handleLogin = ()=>{
      navigate("/assets/components/login")
    }
  
      return(
        <>
        <h1 className="intro-title">¡Ducks web!</h1>
        <div className='intro-container'>
          <img src="./images/duck.jpg" alt="duck"  className='intro-image'/>
          <p>This web is dedicated to talk with ducks.Obviously is all we need in our life... ¿No?</p>
          <p>Of corse isn't a boring form to waste your time. Its necessary to sleep in the nights... lonely and cold nights without ducks </p>
          <h2>Click below to read more about ducks </h2>
          <button onClick={handleForm} className='intro-form'>🦆  Register</button>
          <button onClick={handleLogin} className='intro-login'>🦆  Login</button>
        </div>
        </>
      )
}
export default Welcome