import React,{useState} from 'react'
import SingleCorrectCard from './SingleCorrectCard'
import MultipleChoiceCard from './MultipleChoiceCard'
import SingleCorrectButton from './SingleCorrectButton'
import MultipleChoiceButton from './MultipleChoiceButton'
import '../style/MainContainer.css'


var singleCorrectCount = 0;
var MultipleChoiceCount=0;

const MainContainer = () =>{

  const [cards, setCards] = useState([]);


  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    console.log("dropped")
    console.log(e.dataTransfer.getData('id'))

    const id = e.dataTransfer.getData('id')

    if (id === 'singleCorrect') {
      console.log("singleboys")
      setCards([...cards, <SingleCorrectCard id={singleCorrectCount} />])
      singleCorrectCount = singleCorrectCount + 1
    }else if (id === 'multipleChoice') {
      console.log("radio :")
      setCards([...cards, <MultipleChoiceCard id={MultipleChoiceCount}  />]);
      MultipleChoiceCount = MultipleChoiceCount + 1
    } 
    //else if (id == 'mcq') {
    //   setCards([...cards, <Card_multiple id={checkBoxCount} DataHandler={DataHandler} />])
    //   checkBoxCount = checkBoxCount + 1
    // }

  }

  return(
    <>
        <div className='mainContainer'>
         <div className='containerOne'>
         
         </div>
         <div className='containerSecond'>
         <div className='optionTitle'>List of available question types</div>
         <hr></hr>
         <div className='btnContainer'>
         <SingleCorrectButton />
         <MultipleChoiceButton />
         <button className='btn'>Text</button>
         </div>
         
         </div>
         <div className='containerThird'>
         <div className='surveyTitleDate'>
          <input className="inputField" type="text" placeholder="Survey Title" />
          <input className="inputField" type="date" placeholder="Second input field" />
         </div>
         <hr></hr>
         <div className='dropableContainer' onDrop={(e) => { handleDrop(e) }} onDragOver={handleDragOver}>
         <div className='dropableArea'>Dropable Area</div>
         </div>
         
         <div>
         <ul style={{ textAlign: 'center', display: 'block' }}>
              {
                cards.map((Card, index) => {
                  return <li>{Card}</li>
                })

              }
            </ul>
            
         </div>
         </div>
        </div>
    </>
  )
}

export default MainContainer;