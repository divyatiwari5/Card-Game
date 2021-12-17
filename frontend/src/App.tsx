import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Card } from 'commons/components/Card/Card';
import { Button } from 'commons/components/Button/Button';
import CardCounter from 'CardCounter/CardCounter';
import DealButton from 'DealButton/DealButton';

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
      <DealButton />
      <Button btnText={'Play Again'} align={'center'} />
      <Button btnText={'Reset'} align={'right'} />
    </div>
  );
};

export default App;
