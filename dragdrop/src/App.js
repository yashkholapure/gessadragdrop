import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Navbar from './components/Navbar';
import SingleCorrectCard from './components/SingleCorrectCard';


// const Routing = () => {

//   return (
//     <Routes>

//       <Route path="/" element={<MainContainer />} />


//       {/* <Route path="/test" element={<SingleCorrectCard />} /> */}

      

//     </Routes>
//   )

// }

const App = () =>{
  return(
    <>
    <MainContainer /> 
        
         <Navbar />
         {/* <Test /> */}
       
    </>
  )
}

export default App;