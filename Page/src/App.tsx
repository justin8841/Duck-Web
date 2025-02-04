
import './App.css'
import Form from './assets/components/form';
import Login from './assets/components/login';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Welcome from './assets/components/intro';
import Landing from './assets/components/landing-page';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Welcome/>}></Route>
        <Route path="/assets/components/form" element = {<Form/>}></Route>
        <Route path="/assets/components/login"element = {<Login/>}></Route>
        <Route path='/assets/components/landing-page' element = {<Landing/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
