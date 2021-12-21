function CardCounter(props: any) {
  const { counter } = props;
  return (
    <div className="counter-box">
      <p className="counter">{counter}</p>
      <p className="text">Cards Left</p>
    </div>
  );
}

export default CardCounter;
