import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnDetailStyled = styled(Link)`
text-decoration: none;
background-color:#fff ;
border: 1px solid #90a0a7;
padding: 5px 15px;
border-radius: 50px;
margin:5px 0;
color: #90a0a7;
transition:all 300ms;
&:hover{
    background-color:#90a0a7;
    color: #fff;
}
`;