import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./staff1.jpg"

const Staff = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>STAFFING SOLUTIONS</SplitTitle>                                         
                <p>  Atyeti’s unmatched database of candidates with time tested processes and technology assure our clients of quality hires each time.

From sourcing a single Contractor to facilitating multiple hires, we have the capability to scale our recruiting efforts depending upon our clients’ needs
                       </p>
                                                   
                                                  <h4><strong>Key Service Areas</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
<p className="p"> Contract Staff Augmentation</p>
<p className="p">Contract to Hire</p>
<p className="p">  Permanent / Full Time</p>

 </div>

                                                    </div>
                                     
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default Staff
