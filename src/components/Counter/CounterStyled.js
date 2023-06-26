import styled from "styled-components";
export const CounterStyled = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100px;
padding: 2px 6px;
margin-top: 10px;
.btn-counter{
    width: 35px;
    height: 35px;
    background-color: #fff;
    border: .3px solid #E94560;
    padding: 5px;
    border-radius:5px;
    color:#E94560;
    font-weight: bolder;
    &:hover{
        background-color:#E94560;
        color: white;
    }
}
p{
    font-weight: bold;
    text-align: center;

}


`;