import React from 'react'
import styled from "styled-components"
import "./HealthAndLife.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from './split1'
import { Container } from "react-bootstrap"

import Logo from "./media1.jpg"

const Media = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>Media & Entertainment</SplitTitle>
                                                     
                <p> Internet of Things, digital convergence, and on-demand mobility are creating new opportunities
        for media companies. To meet the demands of a 24/7 connected world, you need a nimble partner with
         their finger on the pulse of new technology. Let us become your Innovation Lab, identifying the
          emerging technologies and strategies you need to align product with demand, make intelligent business
           decisions, and deliver new and engaging experiences to your customers in their connected world.
</p>
                                                   
                                                  <h4><strong>Key Media & Entertainment Areas Supported</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4">
                                                          <p>Digital Advertising Services</p>
<p>Digital Asset Management
</p>
<p>Direct Marketing</p>
<p>Mobility</p>
<p>Reporting & Insights</p>
<p>SEO & Enterprise Search</p>
<p>User Experience </p>
</div>
                                                
</div>
            </div>
        </Split>
         </Container>

        
        
     
</>

    )
}

export default Media
