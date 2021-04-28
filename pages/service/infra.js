import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./infras.jpg"

const Infra = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>CLOUD SERVICES</SplitTitle>                                         
                <p>    With emerging technologies like Big Data, Mobility and cloud, expectations from IT are higher than ever.
      Our experts can help you build and manage an IT infrastructure that equals the demands of a changing
       business environment
                                                   </p>
                                                   
                                                  <h4><strong> Key Service Areas</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
                         <p className="p"> Data Center Services</p>
<p className="p">Service Desk</p>
<p className="p"> Network Services</p>
<p className="p">End User Services</p>
<p className="p">Remote Infrastructure Management</p>
  </div>     
                                                    </div>
                                     
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default Infra
