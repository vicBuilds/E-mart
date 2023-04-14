import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
import { Badge } from '@mui/material';

const Container=styled.div`
    height:60px;
    `

const Wrapper=styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`

const SearchContainer=styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border: 0.5px solid lightgray;
`

const Input=styled.input`
  border: none;
  height: 100%;
`
const Logo=styled.h1`
  font-weight: bold;
  letter-spacing: 4px;
`

const Language=styled.span`
  font-size: 14;
  cursor: pointer;
`

const Right=styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
`
const Center=styled.div`
flex: 1;
text-align: center;
`
const MenuItem=styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 14px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input/>  
            <SearchOutlinedIcon style={{fontSize:'18px', color:'gray'}}/>
            </SearchContainer>
          </Left>
          <Center>
            <Logo>
            E-MART.
            </Logo>
            </Center>
          <Right>
          <MenuItem>
              REGISTER

              </MenuItem>
              <MenuItem>
              SIGN-IN
              </MenuItem>
                <MenuItem>
                
              <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color=''/>
              </Badge>
              </MenuItem>

            
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;