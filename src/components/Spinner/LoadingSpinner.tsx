import React from "react";
import styled, { css } from "styled-components";

interface SpinnerProps {
  hasMargin?: boolean
}

interface SpanProps {
  dot: number;
}

const LoadingSpinner = ({ hasMargin }: SpinnerProps) => {
  const margin = hasMargin ? '1rem' : '';
  const dots = Array.from(new Array(20), (_, idx) => idx);

  return (
    <SpinnerContainer style={{ marginTop: margin }}>
      <Circle>
        {
          dots.map(item => <Span key={item} dot={item}/>)
        }
      </Circle>
      <Circle>
        {
          dots.map(item => <Span2 key={item} dot={item} />)
        }
      </Circle>
    </SpinnerContainer>
  )
}

export default LoadingSpinner;

const SpinnerContainer = styled.div`
  color: #fff;
  display: flex;

  & > div:nth-child(2) {
    transform: rotate(-180deg);
  }

  animation: changeColor 1s linear infinite;

  @keyframes changeColor {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`

const Circle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 -7.5px;
`

const Span = styled.span<SpanProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: red; */
  transform: rotate(calc(18deg * ${({dot}) => dot}));


  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: calc(50% - 7.5px);
    width: 15px;
    height: 15px;
    background-color: #00ff0a;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff0a,
    0 0 20px #00ff0a,
    0 0 40px #00ff0a,
    0 0 60px #00ff0a,
    0 0 80px #00ff0a,
    0 0 100px #00ff0a;
    transform: scale(.1);
    animation: spin 1s linear infinite;
    animation-delay: calc(0.025s * ${({dot}) => dot});

  }

  @keyframes spin {
    0% {
      transform: scale(.6);
    }
    50%, 100% {
      transform: scale(.1);
    }
  }
`
const Span2 = styled(Span)`
  &:before{
    animation-delay: calc(-0.025s * ${({dot}) => dot});
  }
`