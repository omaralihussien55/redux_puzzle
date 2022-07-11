import React, { useEffect, useRef } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addGuess ,play,reset,masage} from '../redux/GuessSlice'
import {Link} from 'react-router-dom'

const GuessContainer = () => {
    const {guessArr,item,arr,count,correctnum,errornum,click,showMasge,showResultOverLay,showOverLay} = useSelector((state)=> state.guess)
    const itemRef= useRef()
    const dispatch = useDispatch()
    const HandlBlock = (id)=>{
        dispatch(addGuess(id))
    }

    const HandlePlay = ()=>{
        if(click){
            dispatch(play({type:"next",item:Array.from(Array(guessArr.length).keys())}))
        }else{
            dispatch(masage())
        }
       
    
    }

  const HandleReset = ()=>{
    dispatch(play({type:"rest",item:Array.from(Array(guessArr.length).keys())}))
    dispatch(reset())
  }
  return (
    <div className='container'>
    <h3 className='text-center my-2 text-info'>Guess</h3>
    <div className='game-app mx-auto my-2 game-parent' style={{pointerEvents: click&&"none"}}>
    
           {
            guessArr.map((i,idx)=>{
                return(
                    <div style={{order:`${arr[idx]}`,  transform:`${i.rol ? "rotateY(180deg)": "rotateY(0deg)"}` ,}}  
                    className='game-block' key={idx} onClick={()=>HandlBlock(i.id)}>
                    <div className='face front'></div>
                    <div className='face back'>
                    <img  src={i.photo} className='w-100 h-100'/>
                    </div>
                   </div>
                )
            })
           }
 
    </div>
         <div className='mt-3 row photo-item-p'>
            <div ref={itemRef} className='col-10 col-sm-7 col-md-4 mx-auto mx-md-0 mb-1 photo-item'>
   {showOverLay &&  <div className='overlay'>
     <div className='overlay-content'>
     <h1 className={ showResultOverLay ? "text-success" : "text-danger" }>{ showResultOverLay ? "succesfull":"Failed"}</h1>
     </div> 
     </div>}
               <img style={{transform:showResultOverLay && "rotateZ(360deg)"}} src={item.photo} className='w-100 h-100'/>
            </div>
            <div className='col-10 col-sm-7 col-md-6 mx-auto mx-md-0  row'>
                  <div className='col mb-2 p-1 text-center text-info'>tries : {count}</div>
                  <div className='col mb-2 p-1 text-center text-success'>correct : {correctnum} </div>
                  <div className='col mb-2 p-1 text-center text-danger'>failed : {errornum} </div>
            </div>
         </div>


         <div className='mt-3 text-center'>
            { showMasge && <p style={{height:"20px"}} className='text-center text-danger mb-2'> يجب ان تخمن الورقة </p>}
              <button className='btn btn-danger mr-2 ' onClick={HandleReset} >reset</button>
              <button className='btn btn-primary mr-2' onClick={HandlePlay} >next</button>
           <div className='text-center mt-2'>
           <Link to="/" className='btn btn-success mr-2' onClick={()=> dispatch(reset("home"))} >Back To Home</Link>
         
           </div>
        </div>
    </div> 
  )
}

export default GuessContainer