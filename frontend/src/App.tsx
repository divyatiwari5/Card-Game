import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Card } from 'commons/components/Card/Card';

const App: React.FC = () => {
  return (
    <div className="board">
      <Card />
    </div>
  );
};

export default App;
