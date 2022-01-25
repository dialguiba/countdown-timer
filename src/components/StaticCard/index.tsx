import "./static-card.scoped.scss";

interface propTypes {
  position?: string;
  digit: string;
}

export const StaticCard = ({ position, digit }: propTypes) => {
  return (
    <div className={position}>
      <span>{digit}</span>
    </div>
  );
};
