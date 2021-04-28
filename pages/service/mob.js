import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./mobility1.jpg"

const Mob = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>MOBILITY </SplitTitle>                                         
                <p>    Mobility is redefining the rules of user experience with anytime, anywhere availability and is now
     a necessity for future-ready, borderless global enterprise.
      It is a constant endeavor to improve employee interactivity and create seamless experiences
       for customers while having real-time engagements with the field force.

                       </p>
                                                   
                                                  <h4><strong> Key Service Areas</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
                         <p className="p"> Strategy and Consulting</p>
<p className="p"> Delivery Services</p>
<p className="p"> Managed Services</p>
<p className="p"> Mobility Solutions</p>

  </div>     
                                                    </div>
                                     
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default Mob
