import styled from "styled-components"
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { SliderItems } from "./data/sliderDummy";
import { useState } from "react";

const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow=styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
background-color: #eae7e7;
border-radius: 50%;
position: absolute;
top:0;
bottom: 0;
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Wrapper=styled.div`
height: 100%;
display: flex;
transform: translateX(${(props)=>props.SlideIndex * -100}vw);
transition: all 1.2s ease;

`
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
`
const ImageContainer=styled.div`
height: 100%;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`
const Image=styled.img`
height: 95%;
`

const InfoContainer=styled.div`
flex: 1;
padding: 50px;
`

const Title=styled.h1`
font-size: 70px;

`
const Description=styled.p`
margin: 18px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setslideIndex]=useState(0);

    const handleClick=(direction)=>{
        // console.log("Direction is ", direction);
        console.log("slideIndex is", slideIndex);
        if(direction==='left'){
            setslideIndex(slideIndex>0?slideIndex-1:2);
        }else{
            setslideIndex(slideIndex<2?slideIndex+1:0);
        }

    }


  return (
    <Container>
        <Arrow style={{left:'10px'}} onClick={()=>handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
        <Wrapper SlideIndex={slideIndex}>
            {SliderItems.map((item)=>{
                return(
                 <Slide style={{backgroundColor:`${item.bg}`}} key={item.id}>
            <ImageContainer>
                <Image src={item.img}/>
            </ImageContainer>
            <InfoContainer>
                <Title>
                    {item.title}
                    </Title>
                <Description>{item.description}</Description>
                <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide> );


            })}
           
        </Wrapper>
        <Arrow style={{right:'10px'}} onClick={()=>handleClick("right")}>
            <ArrowRightOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider;