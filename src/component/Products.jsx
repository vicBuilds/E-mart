import styled from "styled-components";
import { ProductData } from './data/sliderDummy'
import Product from "../component/Product";

const Container=styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
`

const Products = () => {
    return(
  <Container>
    {ProductData.map((product)=>{
        return (<Product product={product} key={product.id}/>)
    })}
  </Container>);
}

export default Products