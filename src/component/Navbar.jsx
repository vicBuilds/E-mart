import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:60px;

`

const Wrapper=styled.div`
    height: 100%;
    width: 100%;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          Navbar
        </Wrapper>
    </Container>
  )
}

export default Navbar;