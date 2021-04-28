import React from "react"
import styled from "styled-components"
import Cart from "../Demo/Cart"
import Company from "../pages/company"
import Title from "./Title"

const About1 = () => {
  return ( <span>  
       
<Company />

<Cart />


  </span>)
}
const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .icon {
      font-size: 4rem;
      color: var(--clr-primary-5);
      margin-bottom: 1rem;
    }
    h4 {
      text-transform: uppercase;
      font-weight: 500;
    }
    p {
      color: var(--clr-grey-3);
      max-width: 35em;
    }
    div{
      color: var(--clr-grey-2);
    }
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
   
  }
`
export default About1
