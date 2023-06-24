import styled from "styled-components";

export const ItemDetailStyled = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 700px;
padding: 20px;

border-radius: 10px;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

img{
    width: 100px;
}
h2{
    color: #666;
}
span{
    color:red;
    font-size: 20px;
    font-weight: 900;
}
strong{
    font-size: 12px;
    margin-top: 10px;
}

p{
    width: 80%;
}

`;