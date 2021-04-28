
import styled from "styled-components"


export const Split =styled.div`
display:block;
grid-template-columns:1fr 1fr;
align-items:center;
grid-gap:20px;
padding-top:5rem;


@media(max-width: 786px){
    
    grid-template-columns:repeat(3,1fr);
    width:100%;
}

`

export const SplitTitle=styled.h1`
font-size:42px;
padding-top:20px;
`

export const img=styled.img`
height:1000px;
width:1150px;
@media screen and (max-width: 786px) {
  .img {
    text-align: center;
    
    /* width: 100%;
    height: 1000px; */
    grid-template-columns:1fr;
  }
}
`
