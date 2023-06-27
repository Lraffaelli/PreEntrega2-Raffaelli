import styled from "styled-components";

export const ItemDetailStyled = styled.div`

display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 900px;
padding: 20px;

border-radius: 10px;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

.img-detail{    
   
    width: 50%;
    img{
        width: 100%;
    }
}

.info-detail{
    width: 400px;
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

.price-detail{
   display:flex ;
   flex-direction:row;
}
}


`;