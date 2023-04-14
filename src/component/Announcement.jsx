import styled from 'styled-components'


const Container=styled.div`
height: 40px;
background-color: #176767;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
`

const Announcement = () => {
  return (
    <Container>
        Hurry Up.. Discounts Raining upto 30%. Free Shipping on Orders above Rs. 1500
    </Container>
  )
}

export default Announcement