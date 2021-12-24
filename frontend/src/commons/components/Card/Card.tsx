import Clover from '../../../assets/Clover.svg';
import Diamond from '../../../assets/Diamond.svg';
import Heart from '../../../assets/Heart.svg';
import Spade from '../../../assets/Spade.svg';

function Card(props: any) {
  const { value } = props;
  const number = value.slice(1);
  const cardType = value.slice(0, 1);

  /**
   * Returns icon on the basis of initial letter of card
   * @returns card icon
   */
  const getIcon = () => {
    if (cardType === 'S') return Spade;
    if (cardType === 'D') return Diamond;
    if (cardType === 'C') return Clover;
    if (cardType === 'H') return Heart;
    return;
  };

  return (
    <div className="card" key={value}>
      <div className="header">
        <p className="number">{number}</p>
        <img src={getIcon()} className="sm-icon" alt="card-icon-small" />
      </div>

      <img src={getIcon()} className="lg-icon" alt="card-icon-large" />
    </div>
  );
}

export { Card };
