import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./repo.jpg"

const Reg = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>REGULATORY REPORTING AS A SERVICE (RRAAS)</SplitTitle>                                         
                <p>  Global and regional regulations are rapidly evolving; thereby, presenting a challenge to
     institutions to meet their regulatory reporting requirements in a timely and accurate manner.
      In order to avoid redundant, manual, or opaque processes, financial institutions are turning to automated,
       data-driven approaches to ensure greater transparency and accuracy.

Atyeti is a leader in seamlessly consolidating data from disparate sources to create a consistent
 and holistic picture for your Regulatory Exposure to ensure accurate reporting and rapid implementation
  of necessary corrective actions. With years of experience in the regulatory space,
   Atyeti is adept at assembling, transforming, aggregating, auditing, and reporting across numerous
    financial products enabling our patterns to make informed decisions and ensure ongoing compliance.

                       </p>
                                                   
                                                  <h4><strong>Risk & Regulatory Practice</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
<p className="p"> Gresham Clareti Transaction Control (CTC)</p>
<p className="p"> Regulatory Reporting</p>
<p className="p"> Financial reporting</p>
<p className="p">Prudential reporting</p>
<p className="p">Transactional reporting</p>
<p className="p">Statistical reporting</p>
<p className="p">Granular reporting</p>
</div>
<div className="col-md-4">
<p classNmae="p">Multi-dimensional reporting</p>
<p className="p">Report automation</p>
<p className="p"> Visual analytics</p>
<p className="p">Robotic process Management</p>
<p className="p">Data analytics</p>
<p className="p">Business process Management</p>
<p className="p">Learn/Agile Transformation</p>
  </div>     
                                                    </div>
                                     
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default Reg
