import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { play } from '../redux/GuessSlice'
import k2 from '../img/2k.jpg'

const AppContainer = () => {
    const {guessArr} = useSelector((state)=> state.guess)
   const navigate = useNavigate()
const dispatch = useDispatch()
    const HandleStart = ()=>{
    dispatch(play({type:"app",item:Array.from(Array(guessArr.length).keys())}))
    navigate("/guess")
    }
  return (
    <div className='container'>
    <h3 className='text-center my-2 text-primary'>App</h3>
     <div className='row mt-5'>
        <div style={{cursor:"pointer"}} className='col-11 col-sm-8 col-md-4 p-1 app-item bg-dark position-relative mx-auto mx-md-0'>
        <div className='overlay' onClick={HandleStart}>
        <div className='overlay-content'>
          <h2 className='p-1 text-success'>play now </h2>
          <p className='p-1 text-danger '>guess </p>
        </div>
        </div>
          <a  className='d-block w-100 h-100 ' >
           <img src={k2} className="w-100 h-100" />
          </a>
        </div>
     </div>
     
    </div>
  )
}

export default AppContainer