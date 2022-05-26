import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from './components/Spinner/LoadingSpinner';
import LoadingSpinner2 from './components/Spinner/LoadingSpinner2';

function App() {
  return (
    <Container>
      <LoadingSpinner />
      {/* <LoadingSpinner hasMargin/> */}
      <LoadingSpinner2 />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`