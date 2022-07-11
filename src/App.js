import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AppContainer from './component/AppContainer'
import GuessContainer from './component/GuessContainer'


const App = () => {
  return (
    <div>
    <BrowserRouter>
   
     <Routes>
           <Route path="/"  index element={<AppContainer/>}/>
         <Route path='/guess'  element={<GuessContainer/>}/>
     </Routes>
   </BrowserRouter>

    </div>
  )
}

export default App

