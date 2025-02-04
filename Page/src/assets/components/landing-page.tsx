import { FaThumbsUp } from 'react-icons/fa'
import './styles/landing.css'
import { useState } from 'react'



const Post = ()=>{
    const [click, setClick] = useState('#aaa')
    const liked = ()=>{
        setClick('#33FF33')
    }

    return(
        <div>
            <div className="landing-image"></div>
            <p>Another info of ducks</p>
            <a href="https://youtu.be/DSG53BsUYd0?si=lfkEAG0XpIbTmgN1">Necessary info</a>
            <button className="like" onClick={liked}><FaThumbsUp size={30} color={click}></FaThumbsUp></button>
        </div>
    )
}


const Article = ()=>{
    


    return(
        <>
        <Post></Post>
        
        </>
    )
}



const Landing = ()=>{
   

    return(
        <>
        <div className="landing-container">
        <Article></Article>

       
        </div>
        </>
    )
}
export default Landing