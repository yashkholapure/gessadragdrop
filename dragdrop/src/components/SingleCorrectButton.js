import React,{useState} from 'react'
import SingleCorrectCard from './SingleCorrectCard';

const SingleCorrectButton = () =>{

    const [components, setComponents] = useState([]);

    const handleDragOver = (e) => {
      e.preventDefault();
    }
  
    const handleDrop = (e) => {
  
      const id = e.dataTransfer.getData('id')
  
      if (id === 'singleCorrect') {
        setComponents([...components, <SingleCorrectCard />])
      }
  
    }
  
    const handleDragStart = (ev, id) => {
      ev.dataTransfer.setData('id', id)
    }
  

    return(
        <>
         <div className='btnSingleCorrect' onDragOver={(e) => { handleDragOver(e) }} >
         <button className='btn' draggable onDragStart={(e) => { handleDragStart(e, "singleCorrect") }}>Single Choice</button>
         </div>
        </>
    )
}

export default SingleCorrectButton;