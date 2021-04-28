import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./cloud2.jpg"

const Cloud1 = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>CLOUD SERVICES</SplitTitle>                                         
                <p>  Atyeti’s approach is centered on building & providing competency based services such as Cloud Assessment,
      Implementation & Migration to Private, Public and Hybrid Clouds and Cloud Operations services.
                                                   </p>
                                                   
                                                  <h4><strong> Key Service Areas</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
                                                          <p className="p">Cloud Advisory</p>
<p className="p">Cloud Application Migration</p>

<p className="p">Cloud Integration</p>
<p className="p"> Public Cloud Applications</p>
  </div>     


<div className="col-md-4">
<p className="p">Application Testing Services</p>
<p className="p">Cloud Management Services</p>
 <p className="p">Cloud Security</p> </div>                                                        </div>
                                     
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default Cloud1
