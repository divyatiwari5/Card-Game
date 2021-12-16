import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Card } from 'commons/components/Card/Card';
import { Button } from 'commons/components/Button/Button';
import CardCounter from 'CardCounter/CardCounter';

const App: React.FC = () => {
  return (
    <div className="board">
      <CardCounter />
      <div className="card-box">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button btnText={'Play Again'} class={'center'} />
      <Button btnText={'Reset'} class={'right'} />
    </div>
  );
};

export default App;
