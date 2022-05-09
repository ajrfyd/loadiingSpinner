import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from './components/Spinner/LoadingSpinner';

function App() {
  return (
    <Container>
      <LoadingSpinner />
      {/* <LoadingSpinner hasMargin/> */}
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