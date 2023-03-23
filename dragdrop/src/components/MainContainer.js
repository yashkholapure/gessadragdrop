import React,{Component, useState} from 'react'
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
  const [surveyName,setSurveyName] = useState([])
  const [expiryDate,setExpiryDate] = useState([])
  const [allData,setAllData] = useState([])
  const [allFormData,setAllFormData] = useState({})


  const DataHandler = (Data) =>{
    // console.log(allData,"alldata")
    // console.log(Data,"Data")
    // setAllData([...allData, Data])
    // console.log(allData,"alldataafter")
    // console.log(Data,"Dataafter")


    //const Comp = Components[type];
    setAllData((allData) => ([
      ...allData,
      Data
    ]))
    console.log(allData,"alldataafter")
  }

  

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
      setCards([...cards, <SingleCorrectCard id={singleCorrectCount} DataHandler={DataHandler}/>])
      singleCorrectCount = singleCorrectCount + 1
    }else if (id === 'multipleChoice') {
      console.log("multiple :")
      setCards([...cards, <MultipleChoiceCard id={MultipleChoiceCount} DataHandler={DataHandler} />]);
      MultipleChoiceCount = MultipleChoiceCount + 1
    } 
    else if (id === 'text') {
      setCards([...cards, <TextCard id={TextCount} DataHandler={DataHandler}/>])
      TextCount = TextCount + 1
    }

  }



//for changing form sequence



  function handleDragStartNew(e, index) {
   
    //console.log(index,"yyyyyooouuuu")
    e.dataTransfer.setData("text/plain", index);
    //e.preventDefault();
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


  const surveyTitle = (e) =>{
        setSurveyName(e.target.value)
        console.log(e.target.value,"tttt")
  }

  const expiry = (e) =>{
    setExpiryDate(e.target.value)
    console.log(e.target.value,"eeee")
  }
var all;
  const arrangeAll = async() =>{
       all={
          title: surveyName,
          creator:"",
          expiry:expiryDate,
          form:allData
      }
   
  }

  const postData = (e) =>{
    e.preventDefault()
       {arrangeAll()}
       console.log(all,"gggg")
  }

  
  return(
    <>   
        <div style={{ position: 'relative' }}>
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
          <input onChange={surveyTitle}  value={surveyName} className="inputField" type="text" placeholder="Survey Title" />
          <input onChange={expiry}  value={expiryDate} className="inputField" type="date" placeholder="Second input field" />
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

        <button
    style={{ position: 'absolute', bottom: 0, right: 0, marginRight: '27px', marginBottom:'7px', border:'none', outline:'none' }}
    onClick={postData}
  >
   Save Form
  </button>

        </div>
    </>
  )
}

export default MainContainer;