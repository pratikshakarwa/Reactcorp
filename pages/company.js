import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from './split'
 import styled from "styled-components"
import Logo from "../images/comapny3.jpg"
import { Container } from "react-bootstrap"
import { Layout } from '../components';
const Company = () => {
    return (
        
        <Container> 
            
            <Split>
            
            <div>
                <SplitImg src={Logo} alt="logo" />
            </div>
            <div>
                <SplitTitle>Company</SplitTitle>
                <p>
                Atyeti is a global information technology solutions and services provider. We pride ourselves on delivering quantifiable value to our customers and consistently exceeding their expectations. 
                We achieve this by focusing on industry verticals where we have strong domain expertise.
                Atyeti’s unwavering commitment and focus to understand client needs and passion to execute allows us in partnering with our clients to increase their business performance, stay competitive and adapt to constant change.
                For our employees & consultants, we offer an enriching experience that promotes career growth and lifelong learning.
                </p>
            </div>
           
            
        </Split>
      
            
        
        
         </Container>
          
        
        
        
    )
}
 


export default Company