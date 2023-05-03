import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as Styled from './styles'
import logo from '../../images/logotransparent.png'

const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  }
  
  return (
    <Styled.div>
      
      <button onClick={handleClick}>
        <Styled.buttonStyle>Menu</Styled.buttonStyle>
      </button>
     
      <Styled.commonStyle className={visible ? "show" : ""}>
        <button onClick={handleClick}>
        <Styled.buttonStyle>Menu</Styled.buttonStyle>
        </button>
        
          <ul>
          <Styled.ulStyle>
            <Styled.liStyle>
            <li><Link to="/"><Styled.linkStyle>HomePage</Styled.linkStyle></Link></li>
            <li><Link to="/search"><Styled.linkStyle>Search</Styled.linkStyle></Link></li>
            <li><Link to="/contact"><Styled.linkStyle>Contact</Styled.linkStyle></Link></li>
            </Styled.liStyle>
            </Styled.ulStyle>
          </ul>
          
        
        
      </Styled.commonStyle>
     
    </Styled.div>
  )
}

export default Header;

// <nav>
// <ul type="none">
//   <li>

//     <Link to="/">HomePage</Link>

//   </li>
//   <li>

//     <Link to="/search">Search</Link>

//   </li>
//   <li>

//     <Link to="/contact">Contact</Link>

//   </li>

// </ul>
// </nav>
// {/* <Styled.Wrapper>
//       <img src={logo} alt="LOGO" />
 

//     </Styled.Wrapper> */}