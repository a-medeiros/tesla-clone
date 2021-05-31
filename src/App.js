import React from 'react';
import "./App.css";
import styled from 'styled-components';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header"

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``