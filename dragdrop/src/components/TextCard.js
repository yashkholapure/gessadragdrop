import React, { useState } from 'react';
import '../style/SingleCorrectCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faCopy, faAdd } from "@fortawesome/free-solid-svg-icons";

const TextCard = ({id , DataHandler}) => {
  const [question, setQuestion] = useState(''); // State for the question text

  // Event handler for changing the question text
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
    console.log(event.target.value,"dddd")
  };


  const onSave = () =>{
    const allData = {
      id: `text_${id}`,
      question:question,
      questionType: "text"
   }
    console.log(allData,"hai mcq")
    DataHandler(allData)

  }

  return (
    <>
    
    <div style={{ position: 'relative' }}>
    <div className="question-editor">
          <input
          className='textQuestion'
            type="text"
            placeholder="Enter question here"
            value={question}
            onChange={handleQuestionChange}
          />
          
                  {/* <button type="button" 
              //onClick={() => handleDeleteOption(index)}
              >
              Delete
              </button> */}
             
          
          
        </div>
    
        <button
    style={{ position: 'absolute', bottom: 0, right: 0, marginRight: '27px', marginBottom:'7px', border:'none', outline:'none' }}
    onClick={onSave}
  >
   {<FontAwesomeIcon icon={faCheck}  />}
  </button>
    
        </div>
        
    
            </>
    
  );
}

export default TextCard;
