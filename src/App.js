import React from 'react';
import './App.css';
import styled from 'styled-components';
import SideBar from './components/sidebar';
import Editor from './components/editor';

const Body = styled.div`
  /* Root styles */
  font-size: 10px;
  --accent: #bbb;
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

var pageCtx = React.createContext('edit');

function App() {
  return (
    <pageCtx.Provider value={React.useState('edit')}>
      <Body>
        <SideBar />
        <Editor />
      </Body>
    </pageCtx.Provider>
  );
}

export default App;
