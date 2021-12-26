interface IProps {
  counter: number;
  ace: number;
}

function CardCounter(props: IProps) {
  const { counter, ace } = props;
  return (
    <div className="counter-box">
      <p className="counter">{counter}</p>
      <p className="text"> Cards Left</p>
      <div>
        <p>(Ace: {ace} remaining)</p>
      </div>
    </div>
  );
}

export default CardCounter;
