import { FaLinkedin,FaCamera,FaGithub } from "react-icons/fa";


// Function to redirect to the link and below are the links
const redirect = (link: string)=>{
    window.location.href = link
}
const link1 = "https://www.linkedin.com/in/justin-ferreyra-rivero-2875b0274/";
const link2 = "https://www.instagram.com/justin_fer_489/"
const link3 = "https://github.com/justin8841/Duck-Web"


const Navbar = ()=>{
    return(
        <nav className='navbar'>
            <FaLinkedin size={34} color="black" className="icon" onClick={()=>redirect(link1)}></FaLinkedin>
            <a href={link1}>Linkedin</a>
            <FaCamera size={34} color="black" className="icon" onClick={()=>redirect(link2)}></FaCamera>
            <a href={link2}>Instagram</a>
            <FaGithub size={34} color="black" className="icon" onClick={()=>redirect(link3)}></FaGithub>
            <a href={link3}>Github</a>
        </nav>
    )
}
export default Navbar