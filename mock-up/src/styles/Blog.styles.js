import styled from 'styled-components';

export const StyleBlog = styled.div`

display:flex;
flex-direction: column;
justify-content: space-between;
font-family: 'Kanit', sans-serif;
padding: 15px 32px;

.blog-title{
    padding: 15px 32px;
    height: 30vh;
    width: 90%;
    background-image: url("./vanCity.jpg");
    background-color: #CCCCCC;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.blog-experience{
    width: 96.5%;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    // padding: 15px 32px;
}
.experience{
    display:flex;
    color: white;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 15px 32px;
    margin:0;
    background-color: #7F8487;
}
.cliente{
    display: block;
    margin: auto;
    width: 30%;
    height: 30%;
    justify-content: center;
    align-items: center;
}
`;