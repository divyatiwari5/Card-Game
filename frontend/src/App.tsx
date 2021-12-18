import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import { Card } from 'commons/components/Card/Card';
import { Button } from 'commons/components/Button/Button';
import CardCounter from 'CardCounter/CardCounter';
import DealButton from 'DealButton/DealButton';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const deckCards = useSelector((state: any) => state.cards);
  const selectedCards = useSelector((state: any) => state.selectedCards);

  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (deckCards.length === 0) {
      setGameOver(true);
    }
    if (deckCards.length === 52) {
      generateCards();
    }
  }, [deckCards]);

  /**
   * Generate 5 random cards and remove them from the original deck
   */
  const generateCards = () => {
    const randomCards = deckCards.sort(() => Math.random() - Math.random()).slice(0, 5);
    const newCards = deckCards.filter((card: any) => !randomCards.includes(card));
    dispatch({ type: 'DEAL_CARDS', selectedCards: randomCards, cards: newCards });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
    setGameOver(false);
  };

  return (
    <div className="board">
      <CardCounter counter={deckCards.length} />
      <div className="card-box">
        {selectedCards.map((card: any) => {
          return <Card value={card} />;
        })}
      </div>
      {gameOver ? (
        <Button btnText={'Play Again'} align={'center'} click={reset} />
      ) : (
        <DealButton deal={generateCards} />
      )}
      <Button btnText={'Reset'} align={'right'} click={reset} />
    </div>
  );
}

export default App;
