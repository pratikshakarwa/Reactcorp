import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./app7.jpg"

const App = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>APPLICATION SERVICES</SplitTitle>                                         
                <p> Applications are integral to how companies define and meet their 
      changing business needs, which will improve ROI and retain customer loyalty
Atyeti, can help you design, build, test and manage your 
applications to be competitive in a high-velocity, software-driven world.
                                                   </p>
                                                   
                                                  <h4><strong> Key Service Areas</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
                                                          <p className="p">Architecture Strategy and Design</p>
<p className="p">&bull; Application Modernization and Portfolio Management</p>

<p className="p">Application Development and System integration</p>
<p className="p">Application Support and Maintenance</p>
<p className="p">Application Testing Services</p>

                                                          </div>
                               </div>             
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default App
