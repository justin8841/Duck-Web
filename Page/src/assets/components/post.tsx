import {useState} from 'react'
import {FaThumbsUp} from 'react-icons/fa'
import {logUser} from './interfaces/props' 



const Post = (loguser: logUser)=>{
    const [click, setClick] = useState('#aaa')
    const [toggle, setToggle] = useState('description-container')
   const [likes, setLikes] = useState(0)
    const liked = ()=>{
        setClick('#dddd00')
        setLikes(likes + 1)
        if (click === '#dddd00'){
            setClick('#aaa')
            setLikes(likes - 1)
        }
    }
    const toggleClass = ()=>{
        setToggle('description-container-expanded')
        if (toggle === 'description-container-expanded') {
            setToggle('description-container')
        }
    }

    const image = loguser.user.img
    const uName = loguser.user.username
    const uState = loguser.user.state
    const uDescription = loguser.user.description
    return(
        <>
            <img src={image} alt="profile" className='profile-img'/>
            <p className='profile-name'>{uName}</p>
            <p className='profile-state'>{uState}</p>
            <div className="landing-image"></div>
            <button className="like" onClick={liked}><FaThumbsUp size={14} color={click}></FaThumbsUp></button>
            <p className='count-like'>{likes}</p>
            <div className={toggle} onClick={toggleClass}>
                <p className='description' >{uDescription}</p>
            </div>
            <a href="https://youtu.be/DSG53BsUYd0?si=lfkEAG0XpIbTmgN1" className='links'>Necessary info</a>
            
        </>
    )
}

export default Post