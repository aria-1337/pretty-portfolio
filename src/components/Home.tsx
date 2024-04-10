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

            </Content>
        </ContentContainer>
    </Container>);
}

const Title = styled.h1`
    color: whitesmoke;
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
