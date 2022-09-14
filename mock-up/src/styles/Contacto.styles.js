import styled from 'styled-components';

export const StyleContacto = styled.div`
.somos{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 15px 32px;
}
.input{
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical
}
.input-subject{
    width: 100%;
    height: 150px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical
}
.submit{
    background-color: #413F42;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.submit:hover{
    background-color: #45a049;
}
`;