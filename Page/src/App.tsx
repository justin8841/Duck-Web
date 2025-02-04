
import './App.css'
import Form from './assets/components/form';
import Login from './assets/components/login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './assets/components/intro';
import Landing from './assets/components/landing-page';
import { User } from "./assets/components/interfaces/props";

const newUser:User = {
    name : '',
    password : '',
    email : '',
    age : ''
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route>
        <Route path="/assets/components/form" element = {<Form newUser = {newUser}></Form>}></Route>
        <Route path="/assets/components/login"element = {<Login/>}></Route>
        <Route path='/assets/components/landing-page' element = {<Landing/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
