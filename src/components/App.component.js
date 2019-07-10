import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header.component';
import Feed from './Main.component';

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Feed />
      </Container>

    </div>
  );
}

export default App;
