function CardCounter(props: any) {
  const { counter, ace } = props;
  return (
    <div className="counter-box">
      <p className="counter">{counter}</p>
      <p className="text">Cards Left</p>
      <div>
        <p>(Ace: {ace} Left)</p>
      </div>
    </div>
  );
}

export default CardCounter;
