import React, { useState }  from 'react'
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';
import '../style/SingleCorrectCard.css'





const SingleCorrectCard = ({id}) =>{

  const [question, setQuestion] = useState(''); // State for the question text
  const [options, setOptions] = useState([{ text: '', isCorrect: false }]); // State for the options array

  // Event handler for changing the question text
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  // Event handler for changing an option text
  const handleOptionTextChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text: event.target.value };
    setOptions(newOptions);
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
    setOptions([...options, { text: '', isCorrect: false }]);
  };

  // Event handler for deleting an option
  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };


    return(
        <>


<div className="question-editor">
      <input
        type="text"
        placeholder="Enter question here"
       // value={question}
        //onChange={handleQuestionChange}
      />
      {options.map((option, index) => (
        <div key={index} className="option-container">
          <input
            type="text"
            // placeholder={`Option ${index + 1}`}
            // value={option.text}
            // onChange={(event) => handleOptionTextChange(event, index)}
          />
          <label>
            <input
              type="radio"
              name="correct-option"
            //   checked={option.isCorrect}
            //   onChange={() => handleOptionCorrectnessChange(index)}
            />
            Correct
      </label>
              {/* <button type="button" 
          //onClick={() => handleDeleteOption(index)}
          >
          Delete
          </button> */}
          <IconButton aria-label="delete">
             <DeleteIcon />
           </IconButton>
        </div>
      ))}
      <button type="button" 
      onClick={handleAddOption}
      >
        Add Option
      </button>
      
    </div>



            {/* <div className="question-editor">
      <input
        className='singleCorrectQuestion'
        type="text"
        placeholder="Enter question here"
        //value={question}
        //onChange={handleQuestionChange}
      />
      {options.map((option, index) => (
        <div key={index} className="option-container">
          <input
          className='singleCorrectOption'
            type="text"
            //placeholder={`Option ${index + 1}`}
          //  value={option}
          //  onChange={(event) => handleOptionChange(event, index)}
          />
          <button type="button" 
          //onClick={() => handleDeleteOption(index)}
          >
            Delete
          </button>
        </div>
      ))}
      <button type="button" 
      //onClick={handleAddOption}
      >
        Add Option
      </button>
    </div> */}
    

        </>
    )
}

export default SingleCorrectCard;