import Heart from '../../../assets/Heart.svg';

function Card() {
  return (
    <div className="card">
      <div className="header">
        <p className="number">100</p>
        <img src={Heart} className="sm-icon" />
      </div>

      <img src={Heart} className="lg-icon" />
    </div>
  );
}

export { Card };
