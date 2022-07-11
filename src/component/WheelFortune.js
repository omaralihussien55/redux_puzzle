import React from 'react'
import styled from 'styled-components'
import { useSelector ,useDispatch } from 'react-redux'
import { wheel } from '../redux/FortuneSlice'
import wh1 from '../img/wh1.jpg'
import wh2 from '../img/wh2.jpg'
const Container = styled.div`
width:100%;
`
const Row = styled.div`
display:flex;
`
const Item = styled.div`
position:relative;
`
const ContentItemImge= styled.div`
width:250px;
height:250px;
position:relative;
background:black;
border-radius:50%;
perspective: 500px;
cursor:pointer;
transition:all 1.5s ;
transform:rotateZ(${p=>p.r}deg);
&::after{
  content:"";
  position: absolute;
  border-width: 125px;
  border-style: solid;
  border-color: red blue purple green ;
 top:0;
 left:0;
  border-radius:50%;
  z-index: 82;
  
};

&::before{
  content:"";
  position: absolute;
  border-width: 125px;
  border-style: solid;
  border-color: transparent crimson  transparent chocolate   ;
 top:0;
 left:0;
  border-radius:50%;
  z-index: 86;

  transform:rotate(221deg)
}

`
const Items = styled.div`
position:absolute;
left:125px;
bottom:-10px;
border-width: 20px;
border-style: solid;
border-color: transparent transparent  teal transparent   ;
width:0
`
const ContentItem= styled.div`

`

const WheelFortune = () => {
  const {rotat} = useSelector((state)=> state.fortun)
  const dispatch = useDispatch()

  const handleWheel =()=>{
    dispatch(wheel())
  }
  return (
    <Container>
      <Row>
      <Item className='col-12 col-md-6'>
           <ContentItemImge r={rotat}  onClick={handleWheel}>
               
           </ContentItemImge>
           <Items></Items>
      </Item>
      <Item className='col-12 col-md-6'>
           <ContentItem className='mt-5'>
           <button className='btn btn-primary'>wheel</button>
           </ContentItem>
      </Item>
      </Row>
    </Container>
  )
}

export default WheelFortune