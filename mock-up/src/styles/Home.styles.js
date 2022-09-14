import styled from 'styled-components';

export const StyleHome = styled.div`

display:flex;
flex-direction: column;
justify-content: space-between;
font-family: 'Kanit', sans-serif;
padding: 15px 32px;
.nosotros{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 15px 32px;
}
.us{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px 32px;
}
.line{
    width:100%;
}
.hacemos{
    display: block;
    margin: auto;
    width: 30%;
    height: 30%;
    justify-content: center;
    align-items: center;
    // padding: 15px 32px;
}
.weDo{
    display:flex;
    color: white;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px 32px;
    margin:0;
    background-color: #7F8487;
}
`;