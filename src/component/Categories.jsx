import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {CategoriesData} from '../component/data/sliderDummy'; 

const Container=styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Categories = () => {
  return (
    <Container>
      {
        CategoriesData.map((item)=>{
          return( 
          <CategoryItem item={item} key={item.id}/>)

        })


      }
    </Container>
  )
}

export default Categories