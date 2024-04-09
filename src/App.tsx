import React from 'react';
import styled from 'styled-components';
import Background from './components/Background';
import Header from './components/Header';

export default function App() {
  return (<Container>
    <Background />
    <ContentContainer>
        <Header />
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
    z-index: 1;
`;
