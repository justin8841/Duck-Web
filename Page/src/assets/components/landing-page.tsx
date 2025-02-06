import { FaThumbsUp } from 'react-icons/fa'
import './styles/landing.css'
import { useState } from 'react'
import { logUser } from "./interfaces/props";
const examples = [
{
    username: 'user1',
    img: 'https://previews.123rf.com/images/aquir/aquir2307/aquir230700219/208706598-pato-ilustraci%C3%B3n-dibujada-a-mano-de-pato-ilustraci%C3%B3n-de-dibujos-animados-de-estilo-de-dibujo.jpg',
    state: 'Living the moment',
    id: 1
},
{
    username: 'user2',
    img: 'https://w7.pngwing.com/pngs/558/177/png-transparent-doraemon-cartoon-drawing-caricature-doraemon-thumbnail.png',
    state: 'Dream big, hustle hard',
    id: 2
},
{
    username: 'user3',
    img: 'https://archive.org/download/Piolin...DibujoCreadoPorKevinMillanVideo/mi-amigo-piolin.jpg',
    state: 'Stay positive, stay strong',
    id: 3
},
{
    username: 'user4',
    img: 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839MPA4459PT28D323124804W10000H9404/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/bigotes-y-patas-dibujo-de-dibujos-animados-de-gatos-lindos-pegatina.jpg',
    state: 'Keep it simple',
    id: 4
},
{
    username: 'user5',
    img: 'https://img.freepik.com/vector-gratis/chica-linda-genial-sosteniendo-patineta-icono-vectorial-dibujos-animados-ilustracion-personas-vector-plano-aislado-deportivo_138676-10662.jpg',
    state: 'Chasing dreams',
    id: 5
},
{
    username: 'user6',
    img: 'https://thumbs.dreamstime.com/z/bart-simpson-caricatura-vektor-formatos-png-jpg-262242958.jpg',
    state: 'One step at a time',
    id: 6
},
]

const Post = (loguser: logUser)=>{
    const [click, setClick] = useState('#aaa')
    const liked = ()=>{
        setClick('#dddd00')
    }
    const image = loguser.user.img
    const uName = loguser.user.username
    const uState = loguser.user.state
    return(
        <>
            <img src={image} alt="profile" className='profile-img'/>
            <p className='profile-name'>{uName}</p>
            <p className='profile-state'>{uState}</p>
            <div className="landing-image"></div>
            <p>Another info of ducks</p>
            <a href="https://youtu.be/DSG53BsUYd0?si=lfkEAG0XpIbTmgN1">Necessary info</a>
            <button className="like" onClick={liked}><FaThumbsUp size={14} color={click}></FaThumbsUp></button>
        </>
    )
}
const Landing = ()=>{
   
    return(
        <>
        <div className="landing-container">
        {examples.map((example)=>{
            return(
                <div key={example.id} className='post-container'>
                    <Post user={example}></Post>
                </div>
            )
        })}
        </div>
        </>
    )

}
export default Landing