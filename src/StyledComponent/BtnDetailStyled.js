import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnDetailStyled = styled(Link)`
text-decoration: none;
background-color:#90a0a7 ;
padding: 8px;
border-radius: 5px;
margin:20px 0;
color: #fff;
transition:all 300ms;
&:hover{
    background-color:#7e8e94;
}
`;