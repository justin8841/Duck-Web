import { useState } from "react"
import "./styles/something.css"

const Something = ()=>{
    const[data, setData] = useState<string>("initial");
    const[cont, setCont] = useState<number>(0);
    const info = ["state 1","state 2","state 3","state 4"]
    function handleClick(){
     console.log(data)
     console.log(cont)
     const newData = info[cont]
     if (info.length > cont  && cont != info.length) {
      setCont(cont + 1)
      setData(newData)
     }else{
      setCont(0)
      setData(newData)
     }
    }
    return (
      <div className="something">
        <button onClick={handleClick} className="push"> Push mé</button>
        <p>you are in state {data}</p>
      </div>
    )
  }
export default Something