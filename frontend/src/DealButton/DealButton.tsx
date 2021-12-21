function DealButton(props: any) {
  const { deal } = props;
  return (
    <button className="deal-btn" onClick={deal}>
      Deal
    </button>
  );
}

export default DealButton;
