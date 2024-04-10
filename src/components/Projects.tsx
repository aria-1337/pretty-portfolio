import React from 'react';
import styled from 'styled-components';

export default function Projects() {
    return (<Container>
        <ContentContainer>
            <h1>Coming soon!</h1>
        </ContentContainer>
    </Container>);
}
const Container = styled.div`
    display: flex;
    color: whitesmoke;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 10px;
    background: rgba(0,0,0,0.9);
    min-width: 100%;
`;
