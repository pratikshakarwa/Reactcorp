import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./asset1.jpg"

const Soft = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>SOFTWARE ASSET SOLUTIONS</SplitTitle>                                         
                <p> Atyeti’s Software Asset Management solution combines expert knowledge of software licensing with award winning technology to streamline and ease the process of establishing and managing an organization’s software license compliance.

                       </p>
                                                   
                                                  <h4><strong>Key Service Areas</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
<p className="p"> Implementation of SAM</p>
<p className="p">Create Organizational procurement policy & processes</p>
<p className="p">  Create Governance</p>
<p className="p">Plan for ongoing management</p>

 </div>

                                                    </div>
                                     
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default Soft
