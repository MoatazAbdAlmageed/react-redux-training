import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Header from './Header.component';
import Feed from './Feed.component';


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
