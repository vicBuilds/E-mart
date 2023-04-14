import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Info=styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255 238 238 / 70%);
    transition: all 0.5s ease;
`

const Container=styled.div`
    position: relative;
    flex: 1;
    margin: 10px;
    min-width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f1f1;

    &:hover ${Info}{
        opacity: 1;
    }
`    
const Image=styled.img`
height: 90%;
width: 100%;
    
`

const Icon=styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #d6d6d6;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    opacity: 0.8;
    transition: all 0.9s ease;
    cursor: pointer;
    
    &:hover{
        background-color: #5e5858;
        transform: scale(1.2);
    }
`

const Product = ({product}) => {
  return (
    <Container>
       <Image src={product.image}/>
       <Info>
            <Icon>
                <ShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
               <SearchOutlinedIcon/>
            </Icon>
            <Icon>
               <FavoriteBorderOutlinedIcon/>
            </Icon>
       </Info>
    </Container>
  )
}

export default Product