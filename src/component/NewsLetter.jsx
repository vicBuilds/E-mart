import styled from "styled-components"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Container=styled.div`
height: 60vh;
background-color: #f4d6d6;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title=styled.h1`
font-size: 70px;
margin-bottom:20px;


`
const Description=styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
border: 1px solid lightgray;
padding: 0px 2px;

`
const Input=styled.input`
height: 100%;
border: none;
flex: 8;
padding-left: 20px;
`
const Button=styled.button`
flex:1;
height: 100%;
border: none;
background-color: #3da2a2;
color:white;
transition: all 0.6s ease;
&:hover{
  background-color: #1b5151;
}
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates for your favourite Products.</Description>
      <InputContainer>
      <Input placeholder="Enter your Email"/>
      <Button>
        <SendOutlinedIcon/>
      </Button>
      </InputContainer>  
    </Container>
  )
}

export default NewsLetter