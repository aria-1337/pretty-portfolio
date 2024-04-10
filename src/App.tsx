import React, { useState } from 'react';
import styled from 'styled-components';
import Background from './components/Background';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
    const [content, setContent] = useState('home');
    return (<Container>
    <Background />
    <ContentContainer>
        <Header 
            currentContent={content}
            setContent={setContent}
        />
        { content === 'home' ? <Home /> : null }
    </ContentContainer>
    </Container>);
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    width: 500px;
    margin: 10px;
    height: 90%;
`;
