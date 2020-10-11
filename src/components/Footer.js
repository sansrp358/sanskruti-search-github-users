import React from 'react';
import styled from 'styled-components';
const Footer = () => {
    return (
    <Wrapper>
      <footer className="my_footer">
        <p style={{color:"#111",fontSize:"1.2em",textAlign:"center",textTransform:"uppercase",lineHeight:"5rem",margin:"0",padding:"0",bottom:"0"}}><b>Made with ❤️ by S@nskruti</b></p>
      </footer>
    </Wrapper>
    );
  };
  
const Wrapper = styled.footer`
  ${'' /* width:100vw; */}
  height:2rem;
  ${'' /* background-color:#2C302E; */}
  color:#fff;
  margin:0;
  padding:0;
  margin-top:auto;
 
  position:relative;
 
`;


  export default Footer;

  