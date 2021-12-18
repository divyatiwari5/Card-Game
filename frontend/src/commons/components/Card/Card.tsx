import Heart from '../../../assets/Heart.svg';
import Clover from '../../../assets/Clover.svg';
import Diamond from '../../../assets/Diamond.svg';
import Spade from '../../../assets/Spade.svg';

function Card(props: any) {
  const card = props.value;
  const number = card.slice(1);
  const cardType = card.slice(0, 1);

  /**
   *
   * @returns card icon
   */
  const getIcon = () => {
    if (cardType === 'S') return Spade;
    if (cardType === 'D') return Diamond;
    if (cardType === 'C') return Clover;
    if (cardType === 'H') return Heart;
  };

  return (
    <div className="card">
      <div className="header">
        <p className="number">{number}</p>
        <img src={getIcon()} className="sm-icon" />
      </div>

      <img src={getIcon()} className="lg-icon" />
    </div>
  );
}

export { Card };
