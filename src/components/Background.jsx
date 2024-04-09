import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, RoundedBox } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Background() {
    return (<Container>
        <Canvas>
            <SparkleBox 
                position={[-4, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[-4, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[-3, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[-3, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[-2, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[-2, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[-1, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[-1, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[0, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[0, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[1, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[1, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[2, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[2, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[3, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[3, 1, 1]} 
                color={'black'}
            />
            <SparkleBox 
                position={[4, 1, 1]} 
                color={'gray'}
            />
            <SparkleBox 
                position={[4, 1, 1]} 
                color={'black'}
            />
        </Canvas>
    </Container>)
}

function SparkleBox({ position, color }) {
    const [p, setP] = useState(position);
    const [opacity, setOpacity] = useState(1);
    const ref = useRef();
    useFrame((state, delta) => {
            ref.current.rotation.x += delta / 10;
            ref.current.rotation.y += delta / 100;
    });
    return (<mesh 
        ref={ref}
        scale={1}
        >
        <Sparkles 
            position={p} 
            color={color} 
            opacity={opacity} 
            count={500}
            scale={1}
        />
    </mesh>);
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
