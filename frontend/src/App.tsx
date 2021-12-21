import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardCounter from 'CardCounter/CardCounter';
import DealButton from 'DealButton/DealButton';
import { Button } from 'commons/components/Button/Button';
import { Card } from 'commons/components/Card/Card';
import winner from './assets/winner.svg';

function App() {
  const dispatch = useDispatch();
  const deckCards = useSelector((state: any) => state.cards);
  const selectedCards = useSelector((state: any) => state.selectedCards);
  const winningStatus = useSelector((state: any) => state.winner);
  const gameEnd = useSelector((state: any) => state.gameEnd);
  const allAceUsed = useSelector((state: any) => state.allAceUsed);

  const aceCards = ['SA', 'HA', 'DA', 'CA'];

  /**
   * Generate 5 random cards and remove them from the original deck
   */
  const generateCards = () => {
    const randomCards = deckCards.sort(() => Math.random() - Math.random()).slice(0, 5);
    const newCards = deckCards.filter((card: any) => !randomCards.includes(card));
    dispatch({ type: 'DEAL_CARDS', selectedCards: randomCards, cards: newCards });
  };

  /**
   * Resets game
   */
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  /**
   * Calculates winner
   */
  const checkWinner = () => {
    const selectedAceLength = selectedCards.filter((card: any) => aceCards.includes(card)).length;
    if (selectedAceLength > 0) {
      dispatch({ type: 'SET_WINNER', winner: true });
    } else {
      dispatch({ type: 'SET_WINNER', winner: false });
    }
  };

  useEffect(() => {
    const aceAvailableCards = deckCards.filter((card: any) => aceCards.includes(card));

    if (aceAvailableCards.length === 0 && deckCards.length > 0) {
      dispatch({ type: 'SET_ALL_ACE_USED' });
    }
    if (deckCards.length === 0) {
      checkWinner();
    }

    if (deckCards.length === 52) {
      generateCards();
    }
  }, [deckCards]);

  return (
    <div className="board">
      <CardCounter counter={deckCards.length} />
      <img src={winner} className={winningStatus ? 'winner' : 'winner hide'} alt="winner" />
      <div className="card-box">
        {selectedCards.map((card: any, i: number) => {
          return <Card key={i} value={card} />;
        })}
      </div>

      <div className="gameover">
        {gameEnd && !winningStatus ? (
          <>
            <p className="text">You Lose.</p>
            <p className="text">Better luck next time!</p>
          </>
        ) : allAceUsed ? (
          <p className="text">Game Over!!!</p>
        ) : null}
      </div>

      {gameEnd || allAceUsed ? (
        <Button btnText={'Play Again'} align={'center'} click={reset} />
      ) : (
        <DealButton deal={generateCards} />
      )}
      <Button btnText={'Reset'} align={'right'} click={reset} />
    </div>
  );
}

export default App;
