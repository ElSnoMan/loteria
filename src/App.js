import React from 'react';
import './App.css';
import { Layout, Header, CardLayout } from './Components/Layout.components';
import CardGameBoard from './Components/CardGameBoard';
import DrawnCards from './Components/DrawnCards';

const App = () => (
  <div className="App">
    <Header>Lotería</Header>
    <Layout>
      <CardGameBoard />
    </Layout>
  </div>
);

export default App;
