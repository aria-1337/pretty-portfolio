import React from 'react';
import styled, { keyframes } from 'styled-components';

interface HeaderProps {
    currentContent: string;
    setContent: Function;
}

export default function Header({ currentContent, setContent }: HeaderProps) {
    return (<Container>
        <TitleContainer>
            <NameContainer>
                <Title>Aria Lopez</Title>
                <SubTitle>Fullstack Engineer</SubTitle>
            </NameContainer>

            <SocialContainer>
                <SocialButton target="_blank" href="https://www.linkedin.com/in/arialopez/">
                    <SocialImg src="/linkedin.png" />
                    <P>@arialopez</P>
                </SocialButton>

                <SocialButton target="_blank" href="https://github.com/aria-1337">
                    <SocialImg src="/github.svg" />
                    <P>@aria-1337</P>
                </SocialButton>

            </SocialContainer>
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
        </NavContainer>
    </Container>);
}

const P = styled.p`
    margin: 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    @media(max-width: 500px) {
        width: 90%;
        align-items: center;
        justify-content: center;
    }
    margin-bottom: 3%;
`;

const SubTitle = styled.h3`
    margin: 0;
`;

const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: rgba(255,165,0,0.2);
    border-radius: 7px;
    padding: 10px;
    justify-content: space-between;
    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-left: 10%;
    }
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

const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const SocialImg = styled.img`
    width: auto;
    height: 25px;
    margin-right: 5px;
`;

const SocialButton = styled.a`
    display: flex;
    align-items: center;
    font-weight: bold;
    background: whitesmoke;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    margin: 5px;
`;
