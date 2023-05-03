import styled from "styled-components";


export const div = styled.div`

position: relative;
z-index: 2;
`

export const buttonStyle = styled.button`

padding: 10px 20px;
border: 2px solid #3085d6 ;
border-radius: 5px;
background: #3085d6;
box-shadow: 5px 5px 5px grey;
text-shadow: 1px 1px 1px black;
font-weight: 900;
color: white;

`

export const commonStyle=styled.div`
position: absolute;
top: 0;
bottom: 0;

padding: 5px;
border: 1px solid #0657FF;
border-radius: 0 30px 30px 0;
background: #C9E5FF;
width: 300px;
transition: 1s;
overflow: hidden;
height: 200px;
display: none;
  &.show {
    display: block;
  }
  
`



export const ulStyle = styled.ul`
margin: -15px;
padding: 5px;
border: 2px solid #3085d6;
border-radius: 5px;
background: #5fa8ed;
box-shadow: 5px 5px 5px grey;
text-shadow: 1px 1px 1px black;
font-weight: 900;
color: white;
list-style: circle inside;
width: 200px;
height: 120px;
border-radius: 10px;
`

export const liStyle = styled.li`
font-size: 20px;
list-style-type: none;
padding: 5px;
line-height: 2.0;
`
export const linkStyle = styled.a`
color: blue;

&:hover {
    color: red;
    text-decoration: underline;
  }
  
`








// export const Wrapper = styled.div`
// background-size: cover;
// position: relative;
// background-color: red;
// width: 100%;
// height: 120px;


// & > img {
//     background-color: transparent;
//     background-repeat: no-repeat;

// width: 100px;
// height: 100px;
// padding: 10px;
// }
// `


// export const Navi = styled.nav`
//   display:inline-block;
// font-size: 25px;
//   vertical-align:top;
// text-decoration: none; color: white;
// 	list-style: none;
// 	margin: 0;
// 	padding: 0;
// `

// export const visibleStyle = styled.div`
// left: 0;
// height: 200px;
// width: 100%;

// `

// export const hiddenStyle = styled.div`
// left: -300px;
// height: 200px;

// `