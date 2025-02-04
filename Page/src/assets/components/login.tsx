import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './styles/login.css'
import { User } from "../interfaces/props"




const Login = ()=>{
    const [logUser, setLogUser]= useState('')
    const [logPass, setLogPass] = useState('')
    const [userLog, setUserLog] = useState('')
    const [passLog, setPassLog] = useState('')
    const toPage = useNavigate()
    

   

    

    
    
    const handleUser = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const newUserWrite = event.target.value;
        setLogUser(newUserWrite)

    }
    const handleLogPass = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const newPassWrite = event.target.value;
        setLogPass(newPassWrite)
    }
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        const algo = localStorage.getItem("user1")
        let neuAlgo:User = {}
        if (algo != null) {
            neuAlgo =  JSON.parse(algo)
        }
        const user = neuAlgo.name
        const pass = neuAlgo.password
        event.preventDefault()
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