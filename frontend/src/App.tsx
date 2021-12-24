import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardCounter from 'CardCounter/CardCounter';
import DealButton from 'DealButton/DealButton';
import { Button } from 'commons/components/Button/Button';
import { Card } from 'commons/components/Card/Card';
import winner from './assets/winner.svg';
import { getRandomCardsFromDeck, filterOutRandomCardsFromDeck } from './modules/index';

function App() {
  const dispatch = useDispatch();
  const deckCards = useSelector((state: any) => state.cards);
  const selectedCards = useSelector((state: any) => state.selectedCards);
  const isWinner = useSelector((state: any) => state.isWinner);
  const isGameEnd = useSelector((state: any) => state.isGameEnd);
  const allAceUsed = useSelector((state: any) => state.allAceUsed);
  const usedAceCounter = useSelector((state: any) => state.usedAceCounter);

  const aceCards = ['SA', 'HA', 'DA', 'CA'];

  /**
   * Generate 5 random cards and remove them from the original deck
   */
  const deal = () => {
    const randomCards: string[] = getRandomCardsFromDeck(deckCards);
    const newCards = filterOutRandomCardsFromDeck(deckCards, randomCards);
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
  const checkWinner = (selectedAceLength: number) => {
    if (selectedAceLength > 0) {
      dispatch({ type: 'SET_WINNER', isWinner: true });
    } else {
      dispatch({ type: 'SET_WINNER', isWinner: false });
    }
  };

  useEffect(() => {
    if (usedAceCounter === 4) {
      dispatch({ type: 'SET_ALL_ACE_USED' });
    }
    if (deckCards.length === 0) {
      const selectedAceLength = selectedCards.filter((card: any) => aceCards.includes(card)).length;
      checkWinner(selectedAceLength);
    }

    if (deckCards.length === 52) {
      deal();
    }
  }, [deckCards, usedAceCounter]);

  useEffect(() => {
    const aceInSelectedCard = selectedCards.filter((card: any) => aceCards.includes(card)).length;

    dispatch({ type: 'SET_ACE_COUNTER', usedAceCounter: usedAceCounter + aceInSelectedCard });
  }, [selectedCards]);

  /**
   * Checks if game is over or lost
   * @returns text element on the basis of result
   */
  const getResult = () => {
    if (!isWinner) {
      if (isGameEnd) {
        return (
          <>
            <p className="text">You Lose.</p>
            <p className="text">Better luck next time!</p>
          </>
        );
      }
      if (allAceUsed) {
        return <p className="text">Game Over!!!</p>;
      }
    }
    return null;
  };

  /**
   * Returns button on the basis of
   * @returns button
   */
  const getButton = () => {
    if (isGameEnd || allAceUsed)
      return <Button btnText={'Play Again'} align={'center'} click={reset} />;
    return <DealButton deal={deal} />;
  };

  return (
    <div className="board">
      <CardCounter counter={deckCards.length} ace={4 - usedAceCounter} />
      <img src={winner} className={isWinner ? 'winner' : 'winner hide'} alt="winner" />
      <div className="card-box">
        {selectedCards.map((card: any, i: number) => {
          return <Card key={i} value={card} />;
        })}
      </div>
      <div className="gameover">{getResult()}</div>
      {getButton()}
      <Button btnText={'Reset'} align={'right'} click={reset} />
    </div>
  );
}

export default App;
