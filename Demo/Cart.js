import React from "react"
import styled from "styled-components"
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

 import Logo from "./contact.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./crd.css"
const Cart = () => {
  return (
  <Wrapper>
      
      <CardDeck style={{paddingLeft:"4rem",paddingRight:"4rem",paddingTop:"4rem",paddingBottom:"4rem",background:"var(--clr-grey-10)"}}>
  <Card>
    <Card.Img variant="top" src={Logo}  />
    <Card.Body>
      <Card.Title>Prashant Myadam</Card.Title>
      {/* <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text> */}
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
    <Card.Img variant="top" src={Logo} />
    <Card.Body>
      <Card.Title> Casey O'Shea</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    {/* { <Card.Footer>
      { <small className="text-muted">Last updated 3 mins ago</small> }
    </Card.Footer> } */}
  </Card>
  <Card>
    <Card.Img variant="top" src={Logo} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      {<small className="text-muted">Last updated 3 mins ago</small> }
    </Card.Footer> */}
  </Card>
</CardDeck>

    
</Wrapper>)
}
const Wrapper = styled.section`
  .section-center {
     // background-color:black;
    height:auto;
    width:auto;
    align-items:center;
    margin-top: 1rem;
    display: grid;
    gap: 1rem;
     
    grid-gap: 1.5rem;
     padding-left: 3rem;
    padding-right: 3rem;
     
    
      
     
     
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`

export default Cart