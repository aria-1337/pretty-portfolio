import React from 'react';
import styled, { keyframes } from 'styled-components';

interface HeaderProps {
    currentContent: string;
    setContent: Function;
}

export default function Header({ currentContent, setContent }: HeaderProps) {
    return (<Container>
        <TitleContainer>
            <Title>Aria Lopez | Fullstack Engineer</Title>
        </TitleContainer>
        <NavContainer>
            <NavButton 
                onClick={() => setContent('home')}
                selected={currentContent === 'home'}>
                Home
            </NavButton>
            
            <NavButton 
                onClick={() => setContent('experience')}
                selected={currentContent === 'experience'}>
                Experience
            </NavButton>
            
            <NavButton 
                onClick={() => setContent('projects')}
                selected={currentContent === 'projects'}>
                Projects
            </NavButton>
            
            <NavButton 
                onClick={() => setContent('contact')}
                selected={currentContent === 'contact'}>
                Contact
            </NavButton>
        </NavContainer>
    </Container>);
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    @media(max-width: 500px) {
        width: 300px;
    }
    margin-bottom: 3%;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(255,165,0,0.2);
    border-radius: 7px;
    padding: 10px;
    justify-content: space-between;
    @media (max-width: 500px) {
        margin-right: 3%;
    }
    width: auto;
`;

const Title = styled.h1`
    margin: 0;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media(max-width: 500px) {
        flex-wrap: wrap;
    }
`;

const NavButton = styled.button<{ selected: boolean }>`
    background: ${props => props.selected ? 'rgba(225,165,0)' : 'rgba(169,18,224,0.6)' };
    color: whitesmoke;
    font: inherit;
    font-weight: bold;
    cursor: pointer;
    border: rgba(169,18,224,0.4) solid 2px;
    border-radius: 7px;
    padding: 10px 7px;
    margin: 5px;
    &:hover {
        background: rgba(225,165,0, 1);
    }
`;
