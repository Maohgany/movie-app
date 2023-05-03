import styled from "styled-components";


export const Wrapper = styled.div`
overflow: hidden;



& > img {
width: 40%;
height: 1030px;
object-fit: cover;
padding: 10px;
float: left;
margin-right: 10px;
}

`

export const Title = styled.h3`
z-index: 1;
/* position: relative; */
color: white;
font-size: 50px;
top: 1px;
  right: 30%;
  overflow: hidden;
 text-align: center;

`


export const Overview = styled.p`

text-align: center;
position: relative;
color: white;
font-size: 30px; 
  word-wrap: break-word;
  top: 100px;
`


export const Homepage = styled.a`
text-align: center;
position: relative;
color: white;
font-size: 40px;
top: 200px;
margin-left: 15%;
`


export const Name = styled.p`
position: relative;
text-align: center;
font-size: 40px;
top: 200px;
`