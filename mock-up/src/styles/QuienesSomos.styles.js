import styled from 'styled-components';

export const StyleQuienesSomos = styled.div`

display:flex;
flex-direction: column;
justify-content: space-between;
font-family: 'Kanit', sans-serif;
padding: 15px 32px;
box-sizing: border-box;

.somos{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px 32px;
}
.text{
    text-align: justify;
}
.full-crew{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 15px 32px;
}
.crew-member{
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
}
.crew-member:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.crew{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 50%;
    justify-content: center;
    align-items: center;
    border-radius: 5px 5px 5px 5px;
}
.container{
    padding: 2px 16px;
}
`;