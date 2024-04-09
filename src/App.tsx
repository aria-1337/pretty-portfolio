import React from 'react';
import styled from 'styled-components';
import Background from './components/Background';

export default function App() {
  return (<Container>
    <Background />
  </Container>);
}

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;
