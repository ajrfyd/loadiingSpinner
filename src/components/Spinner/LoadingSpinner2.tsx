import React from "react";
import styled, { keyframes } from 'styled-components';

type SpinnerProps = {
  hasMargin?: string;
}

type SpanProps = {
  dot: number;
}

const LoadingSpinner2 = ({ hasMargin }: SpinnerProps) => {
  const dots = Array.from(new Array(5), (_,idx) => idx);


  return (
    <Container style={{ color: '#fff' }}>
      {
        dots.map((dot, idx) => <span key={idx}/> )
      }
    </Container>
  )
}

export default LoadingSpinner2;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  position: relative; 
  width: 100px;
  height: 100px;
  border: 4px solid #f1f1f1;
  border-radius: 50%;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 1),
    10px 10px 10px rgba(0, 0, 0, .1),
    inset -10px -10px 15px rgba(255, 255, 255, .5),
    inset 10px 10px 10px rgba(0, 0, 0, .1);
  overflow: hidden; 

  &:before {
      content: '';
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      background: #f1f1f1;
      border-radius: 50%;
      border: 4px solid #f1f1f1;
      box-shadow:
        inset -10px -10px 15px rgba(255, 255, 255, .5),
        inset 10px 10px 10px rgba(0, 0, 0, .1);
    }

  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
    filter: blur(20px);
    animation: ${spin} .5s linear infinite;
    z-index: -1;
  }
`