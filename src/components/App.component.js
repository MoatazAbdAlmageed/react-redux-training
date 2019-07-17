import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./Header.component";
import Main from "./Main.component";

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Main />
      </Container>
    </div>
  );
}

export default App;
