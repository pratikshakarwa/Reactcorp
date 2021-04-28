import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled, { keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: {eq: "Atyeti_Home.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Background1 = ({children }) => {
  const {
    file:{childImageSharp: { fluid },
  },
} = useStaticQuery(query)

  return ( 
  <Wrapper>
   
 <BackgroundImage Tag="div" fluid={fluid} className="bcg" preserveStackingContext={true}>
{children}
    </BackgroundImage>
    
  </Wrapper>
  )
}

const fadeIn = keyframes`
      from{
         background-color:rgb(225,225,225,0.4);
      }
      to{
        background-color:rgba(0,0,0,0.4);
      }
      `

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
  }
  .bcg::before {
    opacity: 1;
  }
`
export default Background1
