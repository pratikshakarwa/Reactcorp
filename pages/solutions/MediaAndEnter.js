import React from "react"
import { Layout } from "../../components"
import styled from "styled-components"
import { Link } from "gatsby"
import Media from "./media"
import "./cont.css"

const MediaAndEnter = ({props}) => {
  /*const path= props.location.pathname.slice(1);*/
  return (
<div className="cont">
  <Layout>
    <Wrapper>
      <Media />
          </Wrapper>
  </Layout>
  </div>
  )
}
const Wrapper = styled.main`
  min-height: 150vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-grey-5);
  }

`

// const Wrapper = styled.main`
//   margin-top: -5rem;
//   background: var(--clr-primary-8);
//   min-height: calc(100vh - 5rem);
//   display: grid;
//   place-items: center;

//   div {
//     text-align: center;
//     color: var(--clr-white);
//   }
//   h1 {
//        display:block;
//     font-size: 2rem;
//     color: black;
//     margin-bottom: 1rem;
//     text-align:left;
//     text-transform: initial;
   
//   }
//   .helth-bcg{
//  -webkit-transition: var(--transition);
//   transition: var(--transition);
//   border-radius: var(--radius);
//   height: 15rem;
//   -o-object-fit: cover;
//   object-fit: cover;
//   }
//   p {
//     display: grid;
//     margin-block-start: 10em;
//     margin-block-end: 1em;
//     margin-inline-start: 0px;
//     margin-inline-end: 0px;
//     text-align:left;
//     }
//     h3 {
//         padding-top:10px;
//     font-size: 1.75rem;
//      color: var(--clr-grey-3);
//     text-align:left;
//   }
//    h2 {
//     font-size: 2.5rem;
//     text-align:left;
//     color:black;
//   }
//   @media (min-width: 1400px ) {
//     h1 {
//       font-size: 1rem;
//       font-weight:3rem;
//     }
    
//   }
// `

export default MediaAndEnter