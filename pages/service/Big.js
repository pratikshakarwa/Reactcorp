import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from  '../solutions/split1'
import { Container } from "react-bootstrap"

import Logo from "./bigdata.jpg"

const Big = () => {
    return (


<>
 <Container> 
            
            <Split>
            
            <div>
                <img src={Logo} alt="logo" style={{height: "400px"}} />
            </div>
            <div>
                <SplitTitle>BIGDATA & ANALYTICS</SplitTitle>                                         
                <p> The volume and availability of data is skyrocketing by the minute, and so are the expectations that
      it will yield analytical insights for improved business decision making. Ability
       to gain insights from your data is critical as
      it lets you make faster and smarter decisions as you tackle your most complex business issues.
                                                   </p>
                                                   
                                                  <h4><strong> Key Service Areas</strong></h4>
                                                  <div className="row slideanim slide" >
                                                    <div className="col-md-4"  >
                                                         
                                                          <p className="p">Big Data</p>

<p className="p">Enterprise Information Management</p>

<p className="p">Business Intelligence</p>
<p className="p">Advanced Analytics</p>

                                                          </div>
                               </div>             
            </div>
        </Split>
         </Container>

        
     
</>

    )
}

export default Big
