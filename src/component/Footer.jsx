import styled from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { EmailOutlined, Instagram, Phone, RoomOutlined, Twitter } from "@mui/icons-material";
import Amex from '../component/assets/Images/Footer/AMEX.png'

const Container=styled.div`
display: flex;
background-color: #000638;
color: white;
`;
const Left=styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo=styled.h1``;

const Description=styled.div`
margin: 20px 0px;
`;

const SocialIcon=styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px 15px;
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
`;

const SocialContainer=styled.div`
display: flex;

`;

const Center=styled.div`
flex:1;
padding: 20px;
`;

const Title=styled.h3`
margin-bottom: 30px;


`
const List=styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const LisItem=styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right=styled.div`
flex:1;
padding: 20px;

`;

const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment=styled.img`
height: 100px;
width: 70%;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>E-MART.</Logo>
            <Description>Welcome to Emart, your go-to fashion destination. Shop our affordable and trendy selection of clothing, shoes, and accessories. 
                Our user-friendly interface and fast shipping make shopping a breeze. 
                Elevate your style game with Emart - shop now!</Description>
            <SocialContainer>
                <SocialIcon style={{backgroundColor:'#132fc1'}}>
                    <FacebookOutlinedIcon/>    
                </SocialIcon>
                <SocialIcon style={{backgroundColor:'#ff006c'}}>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon style={{backgroundColor:'#25b0ff'}}>
                    <Twitter/>
                </SocialIcon>

            </SocialContainer>


        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <LisItem>Home</LisItem>
                <LisItem>Cart</LisItem>
                <LisItem>Men's Fashiom</LisItem>
                <LisItem>Women's Fashion</LisItem>
                <LisItem>Accessories</LisItem>
                <LisItem>My Account</LisItem>
                <LisItem>Order Tracking</LisItem>
                <LisItem>WishList</LisItem>
                <LisItem>Terms</LisItem>


            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomOutlined style={{marginRight:'10px'}}/>Durgapur-713215, West Bengal, India.
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:'10px'}}/> +91-9836361678
            </ContactItem>
            <ContactItem>
               <EmailOutlined style={{marginRight:'10px'}}/> contact@emart.com
            </ContactItem>
           <Payment src={Amex}/>
        </Right>
    </Container>
  )
}

export default Footer