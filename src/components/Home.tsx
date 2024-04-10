import React from 'react';
import styled from 'styled-components';

export default function Home() {
    return (<Container>
        <ContentContainer>
            <h1>Hi 👋 I'm Aria Lopez</h1>
            <p>I'm a Fullstack Engineer from the bay area who is passionate about mission driven teams. <br></br> <br></br> I tend to prefer to work on the back end of the stack, however I am very comfortable working on the front end as well.</p>
        </ContentContainer>
    </Container>);
}

const Container = styled.div`
    display: flex;
`;

const ContentContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    background: rgba(52,165,235,0.2);
`;
