import { MouseEventHandler } from 'react';

interface IProps {
  deal: MouseEventHandler;
}

function DealButton(props: IProps) {
  const { deal } = props;
  return (
    <button type="button" className="deal-btn" onClick={deal}>
      Deal
    </button>
  );
}

export default DealButton;
