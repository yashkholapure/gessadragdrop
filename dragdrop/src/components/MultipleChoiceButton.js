import React,{useState} from 'react'
import SingleCorrectCard from './SingleCorrectCard';
import MultipleChoiceCard from './MultipleChoiceCard';

const MultipleChoiceButton = () =>{

    const [components, setComponents] = useState([]);

    const handleDragOver = (e) => {
      e.preventDefault();
    }
  
    const handleDrop = (e) => {
  
      const id = e.dataTransfer.getData('id')
  
      if (id === 'multipleChoice') {
        setComponents([...components, <MultipleChoiceCard />])
      }
  
    }
  
    const handleDragStart = (ev, id) => {
      ev.dataTransfer.setData('id', id)
    }
  

    return(
        <>
         <div className='btnMultipleChoice' onDragOver={(e) => { handleDragOver(e) }} onDrop={(e) => { handleDrop(e) }}>
         <button className='btn' draggable onDragStart={(e) => { handleDragStart(e, "multipleChoice") }}>Multiple Choice</button>
         </div>
        </>
    )
}

export default MultipleChoiceButton;