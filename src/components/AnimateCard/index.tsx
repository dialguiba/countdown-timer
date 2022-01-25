import "./animate-card.scoped.scss";

type propTypes = {
  animation?: string;
  digit: string;
};

export const AnimateCard = ({ animation, digit }: propTypes) => {
  return (
    <div className={`flipCard ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};
