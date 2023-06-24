import styled from "styled-components";

export const ItemStyled= styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 20%;
border-radius:5px;
box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
padding:5px;
margin-bottom: 30px;

img{
    width: 35%;
}

h2{
    text-align: center;
    font-size: 18px;
    color:#666;
}
span{
        font-size: 18px;
        color:#E94560 ;
        font-weight: 900;
    }
    .stock-d{
        font-size: 12px;
        font-weight: 400;
        color: #666;
    }

.item-body{
    display: flex;
    justify-content:space-evenly;
    align-items:center;
    width: 100%;
   
    
    .more{
    width: 100px;
    margin: 15px 0;
    padding: 10px;
    border:none;
    border-radius: 5px;
    background-color:#c2c2c2;
    color:#FFFFFF;
    font-weight: bold;
    font-size: 12px;
    cursor: pointer;
    align-self:flex-end;

    &:hover{
        background-color:#b2b2b2;
    }
    }

    
}



`;