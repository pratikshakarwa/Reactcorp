import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../images/logo-Atyeti.webp"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
import NavLink from "./NavLink"
import{GatsbyContext} from '../context/context'
const Navbar = () => {
const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext)
 const tempLinks = [...new Set(links.map(links=>{
   return links.page
 })
 ),
]

return (
     <Wrapper>
<div className="nav-center">
  <div className="nav-header">
<Link to="/">
  <img src={logo} alt="atyeti" style={{marginTop:"-2rem",height:"65px",width:"170px"}}></img>
  </Link>
 
  {!isSidebarOpen &&(
 <button className="toggle-btn" onClick={showSidebar}>
    <GoThreeBars/>
  </button>
  )}
  

  </div>
 
<ul className="nav-links">
 
 {tempLinks.map((page,index) =>
 {
   return <NavLink key={index} page={page}/>
 }
 )}  <li> <Link to="/wall" className="btn">Contact</Link></li>
  <li><Link to="https://careers.smartrecruiters.com/AtyetiInc" className="btn">Career</Link></li>
    </ul>

  </div>


  </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  .nav-center {
    padding-top:4rem;
    width: 100vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-evenly ;
    img {
      width: auto;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 1rem;
      grid-gap: 0 1rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 500px;
      
    }
    li {
      padding:0rem 3rem;
      position: relative;
    }
    .btn {
   color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 1000;
      padding: 5px 10px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
}
    button {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 1000;
      padding: 5px 10px;
      width: 90%;
      text-transform: capitalize;
      position: relative;
    }
  }
`

export default Navbar
