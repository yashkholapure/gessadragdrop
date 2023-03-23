import React, { useState }  from 'react'
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faCopy, faAdd } from "@fortawesome/free-solid-svg-icons";

import DeleteIcon from '@mui/icons-material/Delete';
import '../style/SingleCorrectCard.css'

import AddIcon from '@mui/icons-material/Add';



const SingleCorrectCard = ({id,DataHandler}) =>{

  const [question, setQuestion] = useState(''); // State for the question text
  const [options, setOptions] = useState([{ id: 1,text: '', isCorrect: false }]); // State for the options array

  // Event handler for changing the question text
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
    console.log(event.target.value,"yyy")
  };

  // Event handler for changing an option text
  const handleOptionTextChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text: event.target.value };
    setOptions(newOptions);
    console.log(options,"ggg")
  };

  // Event handler for changing an option correctness
  const handleOptionCorrectnessChange = (index) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], isCorrect: true };
    newOptions.forEach((option, optionIndex) => {
      if (optionIndex !== index) {
        option.isCorrect = false;
      }
    });
    setOptions(newOptions);
  };

  // Event handler for adding a new option
  const handleAddOption = () => {
    setOptions([...options, { id: options.length + 1, text: '', isCorrect: false }]);
  };

  // Event handler for deleting an option
  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };


  const handleAllData = () =>{

    const allData = {
       id: `radio_${id}`,
       question:question,
       options:options,
       questionType: "radio"
    }
     console.log(allData,"hai")
     DataHandler(allData)
  }


    return(
        <>

<div style={{ position: 'relative' }}>
<div className="question-editor">
      <input
        type="text"
        placeholder="Enter question here"
       value={question}
        onChange={handleQuestionChange}
      />
      {options.map((option, index) => (
        <div key={index} className="option-container">
          <input
            type="text"
            // placeholder={`Option ${index + 1}`}
             value={option.text}
            onChange={(event) => handleOptionTextChange(event, index)}
          />
          <label>
            <input
              type="radio"
              name="correct-option"
            //   checked={option.isCorrect}
            //   onChange={() => handleOptionCorrectnessChange(index)}
            />
            
      </label>
              {/* <button type="button" 
          //onClick={() => handleDeleteOption(index)}
          >
          Delete
          </button> */}
          <IconButton aria-label="delete">
             <DeleteIcon onClick={() => handleDeleteOption(index)}/>
           </IconButton>
        </div>
      ))}
     
     
      <button type="button" 
      className='singleCorrectAddButton'
      onClick={handleAddOption}
      variant="contained"
     // startIcon={<FontAwesomeIcon icon={faTrash} />}
      >
      
      {<FontAwesomeIcon icon={faAdd}  />} Add option
       
      </button>



     
     
    </div>
    <button
    style={{ position: 'absolute', bottom: 0, right: 0, marginRight: '27px', marginBottom:'7px', border:'none', outline:'none' }}
    onClick={handleAllData}
  >
   {<FontAwesomeIcon icon={faCheck}  />}
  </button>

    </div>


        </>
    )
}

export default SingleCorrectCard;