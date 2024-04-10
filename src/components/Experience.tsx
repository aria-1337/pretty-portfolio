import React from 'react';
import styled from 'styled-components';

export default function Experience() {
    return (<Container>
        <ContentContainer>
            <Title>Experience</Title>
            <ExpierenceItem>
                <ExperienceTitle>Pando - Fullstack Engineer(backend)</ExperienceTitle>
                <Info>Remote | 2021-2023</Info>
                <Content>
                    Technologies: Node.JS, PostgreSQL, Vue.JS, Typescript, Javascript, AWS, Gitlab CI/CD
                    <ul>
                        <li>Led multiple large scale data migrations, while maintaining full uptime for clients.</li>
                        <li>Redesigned a large chunk of our PostgreSQL schema to support frontend performance, as well as the ability to have a more seamless API for updating/deleting client data.</li>
                        <li>Created an image upload component and API to allow clients to upload profile images via AWS S3.</li>
                        <li>Built out our initial webhooks API to service an external API integration. During this we also switched from an prior external API.</li>
                        <li>Assisted in multiple security audits</li>
                        <li>Redesigned one of our core API endpoints to serve data in a more efficient way, improving frontend performance by multiple seconds on some pages.</li>
                        <li>Built out and maintained numerous API endpoints and SQL queries for our new and old features.</li>
                        <li>Helped build out large parts of out gitlab CI/CD pipeline</li>
                    </ul>
                </Content>
            </ExpierenceItem>

            <ExpierenceItem>
                <ExperienceTitle>Galvanize - Lead Software Engineer Immersive Resident</ExperienceTitle>
                <Info>Remote/San Francisco, CA | 2020-2021</Info>
                <Content>
                    Technologies: Javascript, Node.JS, AWS, Redis, MongoDB, PostgreSQL, React.JS, NGINX, Redux, Docker
                    <ul>
                        <li>Assisted in teaching engineers Javascript concepts</li>
                        <li>Taught engineers how to build a frontend application using React.JS Hooks alongside common libraries like styled-components, and redux.</li>
                        <li>Taught engineers how to build out a Node.JS backend application alongside common system design concepts to scale it to many users.</li>
                        <li>Taught engineers common database's; namely Redis, PostgreSQL, and MongoDB.</li>
                        <li>Taught engineers how to deploy, scale, and stress test and application via AWS EC2 and NGINX</li>
                    </ul>
                </Content>
            </ExpierenceItem>

            <ExpierenceItem>
                <ExperienceTitle>Hack Reactor - Fullstack Engineer Bootcamp</ExperienceTitle>
                <Info>Remote/San Francisco, CA | 2020-2020</Info>
                <Content>
                    Technologies: Javascript, Node.JS, AWS, Redis, MongoDB, PostgreSQL, React.JS, NGINX, Redux, Docker
                    <ul>
                        <li>Spent thousands of hours in an intensive environment learning fullstack development.</li>
                        <li>Learned how build a fullstack application with React.JS and Node.JS</li>
                        <li>Learned common system design patterns, as well as how to scale and deploy an application via AWS and docker.</li>
                        <li>Became proficient in Javascript, PostgreSQL, MongoDB, and React.JS</li>
                    </ul>
                </Content>
            </ExpierenceItem>
        </ContentContainer>
    </Container>);
}

const Title = styled.h1`
    margin: 15px 5px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
`;
const ContentContainer = styled.div`
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
    border-radius: 10px;
    background: rgba(0,0,0,0.9);
`;

const ExpierenceItem = styled.div`
`;

const ExperienceTitle = styled.h3`
    margin: 0;
    color: orange;
`;

const Info = styled.h4`
    margin: 0px 0px 10px 0px;
`;

const Content = styled.p`
    margin: 0;
`;
