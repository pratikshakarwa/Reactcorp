import React from 'react'
// import "./BankAndFinance.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Split, SplitTitle, SplitImg } from './split1'
import { Container } from "react-bootstrap"
import Logo1 from "./bit1.jpg"
const Bank1 = () => {
    return (
//          <div id="portfolio" class="container-fluid text-center bg-grey">
//                  <h2><strong>BANKING & FINANCIAL SERVICES</strong></h2>
                
//                  <div class="row text-center slideanim slide">    
//                                         <div class="col-sm-4">
//                                             <div class=" bg-cover "  >
//                                             </div> 
                                            
//                                         </div>
//                 </div>
//                 <div class="row text-center slideanim slide bg-grey">    
//                                         {/* <div class="col-sm-4"> */}
//                                             <div className="col-md-6 ">
//                                                 <h4><strong>Investment Banking & Brokerage</strong></h4>
//                                                 <p>Investment Banking & Brokerage continues to be transformed by technological innovations including those in the areas of cloud, mobility and big data. 
//                                                     While these innovations present opportunities, capital market  organizations are also faced with tremendous business challenges including constantly changing business dynamics, geopolitical uncertainty, risk and compliance issues as well as cost pressures.</p>
//                                                     <p>We have developed a deep knowledge base and extensive experience in Capital Markets. We provide creative solutions supporting several clients globally across a wide spectrum of their needs. Our team of experts understand your needs and challenges, and partner with you to develop tailored solutions to address your challenges.

//                                                     </p>
                                                    
//                                             </div> 
//                                             <div className="col-md-6">
//                                                 <h4><strong>Retail & Wholesale Banking</strong></h4>
//                                                 <p>Digital banking, regulatory compliance and the mobile web are changing banking and financial services every day. We know the innovative technologies you need to meet the needs of the ever-evolving digital consumer, the cloud applications that will make life easier, and the domain expertise that will allow agile responses. We can show you the strategies and technologies that will help you keep up, keep customers happy, and keep a steady stream of new banking customers coming your way.

//                                                 </p>
//                                             </div>
// {/*                                             </div> */}
//                 </div>
//         </div>  

<>
 

          <Container> 
            
            <Split>
            
            <div>
                <img src={Logo1} alt="logo"  style={{height: "400px"}}/>
            </div>
            <div>
                <SplitTitle>Retail & Wholesale Banking</SplitTitle>
                <p className="p">
               Digital banking, regulatory compliance and the mobile web are changing banking and financial services every day. We know the innovative technologies you need to meet the needs of the ever-evolving digital consumer, the cloud applications that will make life easier, and the domain expertise that will allow agile responses. We can show you the strategies and technologies that will help you keep up, keep customers happy, and keep a steady stream of new banking customers coming your way.
                </p>
                <p className="p"></p>
            </div>
           
            
        </Split>
      
            
        
        
         </Container>
        
     
</>

    )
}

export default Bank1
