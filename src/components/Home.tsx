import React from 'react';
import styled from 'styled-components';

export default function Home() {
    return (<Container>
        <ContentContainer>
            <Title>Hi 👋 welcome to my portfolio!</Title>
            <Content>
                I'm a Fullstack Engineer from the bay area who enjoys working on mission driven projects, especially ones who implement progressive ideas in their respective spaces. 
                <br></br><br></br>
                I enjoy working on the entire stack but have a special place in my heart for backend development and that is where the majority of my interest is.
                <br></br><br></br>
                I am currently looking to join a new team on any axiom of the stack. If you are hiring feel free to reach out to me via the contact form or directly on LinkedIn below.
            </Content>
            <SocialContainer>
                <SocialButton target="_blank" href="https://www.linkedin.com/in/arialopez/">
                    <SocialImg src="/linkedin.png" />
                    <P>@arialopez</P>
                </SocialButton>
            </SocialContainer>
        </ContentContainer>
    </Container>);
}

const Title = styled.h1`
    color: whitesmoke;
`;

const P = styled.p`
    margin: 0;
`;

const Content = styled.p`
    font-weight: 500;
    letter-spacing: 1px;
    color: whitesmoke;
`;

const Container = styled.div`
    display: flex;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 10px;
    background: rgba(0,0,0,0.9);
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
`;
