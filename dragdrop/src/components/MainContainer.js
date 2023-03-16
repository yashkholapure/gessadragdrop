import React,{useState} from 'react'
import SingleCorrectCard from './SingleCorrectCard'
import MultipleChoiceCard from './MultipleChoiceCard'
import SingleCorrectButton from './SingleCorrectButton'
import MultipleChoiceButton from './MultipleChoiceButton'
import TextCard from './TextCard'
import TextButton from './TextButton'
import '../style/MainContainer.css'


var singleCorrectCount = 0;
var MultipleChoiceCount=0;
var TextCount=0;

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
    else if (id === 'text') {
      setCards([...cards, <TextCard id={TextCount} />])
      TextCount = TextCount + 1
    }

  }



//for changing form sequence



  function handleDragStartNew(e, index) {
    //console.log(index,"yyyyyooouuuu")
    e.dataTransfer.setData("text/plain", index);
  }
  
  function handleDropNew(e, newIndex) {
    //console.log(newIndex,"ggggoooo")
    e.preventDefault();
    const oldIndex = e.dataTransfer.getData("text/plain");
    const newCards = [...cards];
    const [removedCard] = newCards.splice(oldIndex, 1);  //remove one card from oldindex
    newCards.splice(newIndex, 0, removedCard);   //at newindex add that removedcard
    setCards(newCards);
  }
  
  function handleDragOverNew(e) {
    e.preventDefault();
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
         <TextButton />
         {/* <button className='btn'>Text</button> */}
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
         <ul style={{ textAlign: 'center', display: 'block' }} >
              {
                cards.map((Card, index) => {
                  return <li key={index}
          draggable
          onDragStart={(e) => handleDragStartNew(e, index)}
          onDrop={(e) => handleDropNew(e, index)}
          onDragOver={(e) => handleDragOverNew(e)}>{Card}</li>
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