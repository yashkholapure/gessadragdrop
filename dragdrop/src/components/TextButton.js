import React,{useState} from 'react'
import TextCard from './TextCard';

const TextButton = () =>{

    const [components, setComponents] = useState([]);

    const handleDragOver = (e) => {
      e.preventDefault();
    }
  
    const handleDrop = (e) => {
  
      const id = e.dataTransfer.getData('id')
  
      if (id === 'text') {
        setComponents([...components, <TextCard />])
      }
  
    }
  
    const handleDragStart = (ev, id) => {
      ev.dataTransfer.setData('id', id)
    }
  

    return(
        <>
         <div className='btnSingleCorrect' onDragOver={(e) => { handleDragOver(e) }} >
         <button className='btn' draggable onDragStart={(e) => { handleDragStart(e, "text") }}>Text</button>
         </div>
        </>
    )
}

export default TextButton;