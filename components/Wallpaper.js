import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import styled from "styled-components"
import Image from "gatsby-image"
import SearchButtons from "./SearchButtons"

const Wallpaper = ({ projects: data,title,page }) => {
  const [projects,setProjects] = React.useState(data)
  
  //more logic
  return (<Wrapper className="section">
    {/* <Title title={ title || "service"} /> */}
   
    <div className="section-center">
  {projects.map(item =>{
    const {id} =item;
    const {description, Name} =item.data
    const fluid =item.data.image.localFiles[0].childImageSharp.fluid
return (
<article key={id}>
<div className="container">
  <Image fluid={fluid} className="img"/>
<div className="info">
  <p>-{Name}-</p>
  <h5>{description}</h5>
  
  </div>
  
 </div>
 
</article>

)

})}

</div>
 
  </Wrapper>
  )
  
}


const Wrapper = styled.section`
  background: var(--clr-grey-10);
  h5{
    font-size: 0.789rem;
    color:black

  }
  .section-center {
    margin-top: 4rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 2rem;
    .img {
      height: 30rem;
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-white-7);
      &:hover .img {
        opacity: 0.2;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-black);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .img {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`
export default Wallpaper
