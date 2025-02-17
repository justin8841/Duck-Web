import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "./interfaces/props"
import './styles/login.css'




const Login = ()=>{
    const [logUser, setLogUser]= useState('')
    const [logPass, setLogPass] = useState('')
    const [userLog, setUserLog] = useState('')
    const [passLog, setPassLog] = useState('')
    const toPage = useNavigate()
    
    //Functions to get the value of inputs and set them to the state
    const handleUser = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const newUserWrite = event.target.value;
        setLogUser(newUserWrite)
    }
    const handleLogPass = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const newPassWrite = event.target.value;
        setLogPass(newPassWrite)
    }


    //Function to valid user info are registered and redirect to the landing page
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{

        // Get the user and password from the local storage and parse them to a JSON object
        const algo = localStorage.getItem("user1")
        let neuAlgo:User = {}
        if (algo != null) {
            neuAlgo =  JSON.parse(algo)
        }
        const user = neuAlgo.name
        const pass = neuAlgo.password
        event.preventDefault()
        // Check if the user and password are correct and redirect to the landing page
        if (logUser === user && logPass === pass) {
            toPage('/assets/components/landing-page')            
        } else {
            alert("You are not registered")
            if (logUser != user) {
                setUserLog('incorrect')
            }
            if (logPass != pass) {
                setPassLog('incorrect')
            }
        }
    }
    return (
        <>
        <form className="log-container" onSubmit={handleSubmit}>
            <h1>Welcome cuack</h1>
            <p className={userLog}>User</p>
            <input type="text" placeholder="User" onChange={handleUser} value={logUser} />
            <p className={passLog}>Password</p>
            <input type="text" placeholder="Password" onChange={handleLogPass} value={logPass}/>
            <button> Login</button>
        </form>
        </>
    )
}


export default Login