import styled from 'styled-components';

export const StyleMain = styled.div`

display:flex;
flex-direction: column;
justify-content: space-between;
font-family: 'Kanit', sans-serif;
box-sizing: border-box;

.main{
    display:flex;
    flex-direction: row;
    padding: 15px 32px;
}
.logo{
    width: 100px;
    height: 100px;
    padding: 0;
    margin: 1px;
}
.title{
    color: #180A0A;
    font-family: 'Kanit', sans-serif;
    font-weight: 100;
    color: white;
    font-size: 16px;
    padding: 15px;
    margin: 1px;
    align-items: center;
    display: flex;
    background-color: #7F8487;
}
.login-btn{
    background-color: #7F8487;
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 1px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}
.menu{
    list-style-type: none;
    display:flex;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 1px;
}
.menu-ietm{
    color: white;
    font-size: 16px;
    display:flex;
    flex-direction: row;
    text-decoration: none;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #7F8487;
}
`;