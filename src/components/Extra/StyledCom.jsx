import React from 'react';
import styled, {keyframes} from 'styled-components';

const spinner = keyframes`
    to{
        transform: rotate(360deg);
    }
`

const Hello = styled.span`
    font-size: 6rem;
`

const Container = styled.div`
    padding: 20px;
    background: #ccc;
    color: #fff;
    border-radius: 15px;
    font-size: 4rem;
    text-align: center;
`

const Loading = styled.div`
    width: 6rem;
    height: 6rem;
    border: 5px solid #ccc;
    border-radius: 50%;
    border-top-color: black;
    animation: ${spinner} 0.6s linear infinite;
`

const DefaultButton = styled.button`
    width: 100px;
    height: 50px;
    padding: 10px;
    margin: 10px 5px;
    border: none;
    border-radius: 10px;
    background: ${({red}) => (red && 'red') || "blue"};
    color: #fff;
    &:hover {
        opacity:  0.5
    }
`

const BaseButton = styled(DefaultButton)`
    dispaly: block;
    width: 100% !important;
`

const StyledCom = () => {
    return (
        <>
            <Loading/>
            <Hello>Hello World!</Hello>
            <Container>Hello Everyone...</Container>
            <DefaultButton>Click Me</DefaultButton>
            <DefaultButton red>Click Me</DefaultButton>
            <BaseButton>Click Me</BaseButton>
        </>
    )
}

export default StyledCom
