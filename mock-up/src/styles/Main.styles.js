import styled from 'styled-components';

export const StyleMain = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
.main{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.logo{
    color: #fff;
    font-family: 'Kanit', sans-serif;
    font-weight: 100;
}
.login-btn{
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.menu{
    list-style-type: none;
    display:flex;
    flex-direction: row;
    justify-content: end;
    padding: 1rem 2rem;
    margin: 0;
}
.menu-ietm{
    display:flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-evenly;
    padding: 1rem 2rem;
    margin: 0;
    background-color: #dddddd;
}
`;