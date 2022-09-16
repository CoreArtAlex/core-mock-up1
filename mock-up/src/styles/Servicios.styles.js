import styled from 'styled-components';

export const StyleServicios = styled.div`

.servicio-general{
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-family: 'Kanit', sans-serif;
    padding: 15px 32px;
}
.serv-titulo{
    padding: 15px 32px;
    height: 30vh;
    width: 90%;
    background-image: url("./vanCity.jpg");
    background-color: #CCCCCC;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.titulo{
    padding: 15px 32px;
    color: black;
    align-items: left;
}
.line{
    width:100%;
}
.text{
    padding: 15px 32px;
    text-align: justify;
}
.servicio{
    width: 96.5%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
}
.learn-btn{
    width: 30vh;
    background-color: #413F42;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.learn-btn:hover{
    background-color: #45a049;
}
`;