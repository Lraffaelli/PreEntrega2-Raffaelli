import styled from "styled-components";

export const ItemStyled= styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 20%;
border-radius:15px;
box-shadow: 0px 2px 8px rgba(0,0,0,0.2);
padding:15px 5px;
margin-bottom: 30px;
background-color: #fff;

.img{
    display: flex;
    height: 150px;
    margin-top: 15px;
    img{
        height: 100%;
    }

}

h2{
    text-align: left;
    font-variant:small-caps;
    width: 80%;
    font-size: 20px;
    color:#666;
}

    .stock-d{
        font-size: 12px;
        font-weight: 400;
        color: #666;
    }

.item-body{
    display: flex;
    justify-content:space-around;
    align-items:flex-end;
    width: 100%;
    height: 50px;
    margin-bottom:20px;
    
    sup{
        position: relative;
        font-size:20px;
        top:6px;
    }
    span{
        font-size: 32px;
        color:#1d3557 ;
        font-weight: 900;
    }
    
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
    

    &:hover{
        background-color:#b2b2b2;
    }
    }

    
}



`;