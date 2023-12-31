import Clover from '../../../assets/Clover.svg';
import Diamond from '../../../assets/Diamond.svg';
import Heart from '../../../assets/Heart.svg';
import Spade from '../../../assets/Spade.svg';

interface IProps {
  value: string;
  total: number;
}

function Card(props: IProps) {
  const { value, total } = props;
  const number = value.slice(1);
  const cardType = value.slice(0, 1);
  const curvyCardPosition = total > 2;

  /**
   * Returns icon on the basis of initial letter of card
   * @returns card icon
   */
  const getIcon = () => {
    if (cardType === 'S') return Spade;
    if (cardType === 'D') return Diamond;
    if (cardType === 'C') return Clover;
    if (cardType === 'H') return Heart;

    return '';
  };

  /**
   * Returns card number classname on the basis of card type
   * @returns card text className
   */
  const getClassName = () => {
    let className = 'number';
    if (cardType === 'H' || cardType === 'D') className += ' red';

    return className;
  };

  return (
    <div className={curvyCardPosition ? 'card curvy' : 'card'} key={value}>
      <div className="header">
        <p className={getClassName()}>{number}</p>
        <img src={getIcon()} className="sm-icon" alt="card-icon-small" />
      </div>

      <img src={getIcon()} className="lg-icon" alt="card-icon-large" />
    </div>
  );
}

export { Card };
