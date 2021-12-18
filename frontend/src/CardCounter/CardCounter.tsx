function CardCounter(props: any) {
  return (
    <div className="counter-box">
      <p className="counter">{props.counter}</p>
      <p className="text">Cards Left</p>
    </div>
  );
}

export default CardCounter;
