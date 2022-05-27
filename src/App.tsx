import React from 'react';
import styled, { keyframes } from 'styled-components';
import LoadingSpinner from './components/Spinner/LoadingSpinner';
import LoadingSpinner2 from './components/Spinner/LoadingSpinner2';

type SpanProps = {
  num: number;
}

function App() {
  const rains = Array.from(new Array(40), (_, idx) => Math.floor((10 * Math.random() + 1)) + 10);
  console.log(rains)
  return (
    <Container>
      <Bubbles>
        {
          rains.map((rain, idx) => <Span key={idx} num={rain}/>  )
        }
      </Bubbles>
      {/* <div style={{ marginTop: '20vh' }}> */}
      {/* <LoadingSpinner hasMargin/> */}
      <LoadingSpinner />
      <LoadingSpinner2 />
    </Container>
  );
}

export default App;

const animate = keyframes`
  0% {
    transform: translateY(100vh) scale(0);
  }
  100% {
    transform: translateY(-10vh) scale(1);
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const Bubbles = styled.div`
  position: relative;
  display: flex;
`

const Span = styled.span<SpanProps>`
  position: relative;
  width: 30px;
  height: 30px;
  background: #4fc3dc;
  margin: 0 4px;
  border-radius: 50%;
  box-shadow: 0 0 0 10px #4fc3dc44,
  0 0 50px #4fc3dc,
  0 0 100px #4fc3dc;
  animation: ${animate} 15s linear infinite;
  animation-duration: calc(125s / ${({num}) => num});

  &:nth-child(even) {
    background: #ff2d75;
    box-shadow: 0 0 0 10px #ff2d7544,
      0 0 50px #ff2d75,
      0 0 100px #ff2d75;
  }
`