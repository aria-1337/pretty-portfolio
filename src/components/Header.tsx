import React from 'react';
import styled, { keyframes } from 'styled-components';

export default function Header() {
    return (<Container>
        <TitleContainer>
            <TextContainer>
                <Name>Aria Lopez</Name>
                <Title>Fullstack Engineer</Title>
                <LOL>SITE IN DEVELOPMENT</LOL>
            </TextContainer>
            <Image src="logo-large.png" />
        </TitleContainer>

        <NavContainer>
            <NavButton>About</NavButton>
            <NavButton>Expierence</NavButton>
            <NavButton>Projects</NavButton>
            <NavButton>Contact</NavButton>
        </NavContainer>
    </Container>);
}

const LOL = styled.p`
    margin: 0;
    font-size: 10px;
    color: orange;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: black;
    border-radius: 7px;
    padding: 10px;
    justify-content: space-between;
`;

const Name = styled.h1`
    margin: 0;
`;

const Title = styled.p`
    margin: 0;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: whitesmoke;
`;

const Image = styled.img`
    height: 75px;
    width: auto;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavButton = styled.button`
    background: #34a4eb;
    color: white;
    font: inherit;
    font-weight: bold;
    cursor: pointer;
    border: transparent;
    border-radius: 7px;
    padding: 5px;
    margin: 5px;
    &:hover {
        background: black;
    }
`;
