import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleNavLink = styled(NavLink)`
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding: 0 15px;
    text-decoration: none;
    cursor: pointer;
    transition:all 300ms;
    &:hover{
        color:#457b9d;
        border-bottom: 4px solid #457b9d;

    }

`;