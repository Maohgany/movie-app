import styled from "styled-components";

export const Wrapper = styled.article`

border-radius: 10px;
overflow: hidden;
position: relative;

& > img {
width: 100%;
height: 100%;
object-fit: cover;
padding: 10px;

}


& > h3 {
color: white;
font-size: 15px;

}
`
export const Box = styled.div`
position: absolute;
top: 15px;
right: 2px;
background-color: white;
padding: 8px;
border-radius: 12px;
font-weight: 700;
font-size: 10px;
`

export const Rated = styled.div`
color: white;
font-size: 20px;

`

