import "./number-block.scoped.scss";
import { useEffect, useState } from "react";
import { AnimateCard } from "../AnimateCard";
import { StaticCard } from "../StaticCard";

type Props = {
  currentNumber?: number;
  unit?: string;
};

export const NumberBlock = ({ currentNumber = 0, unit = "unit" }: Props) => {
  const someStyle = { "--unit": `'${unit.toUpperCase()}'` } as React.CSSProperties;

  const [flip, setFlip] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setFlip(!flip);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentNumber]);

  const logicDigit = (num: number): number => (num + 1 === 60 ? 0 : num + 1);

  const formatDigit = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  /* useEffect(() => {
    console.log(flip);
  }, [flip]); */

  return (
    <div className="numberBlock ">
      <div className="numberBlock__number " style={someStyle}>
        <StaticCard position="upperCard" digit={formatDigit(currentNumber)} />
        <StaticCard position="lowerCard" digit={formatDigit(logicDigit(currentNumber))} />
        <AnimateCard digit={formatDigit(!flip ? logicDigit(currentNumber) : currentNumber)} animation={!flip ? "fold" : "unfold"} />
        <AnimateCard digit={formatDigit(flip ? logicDigit(currentNumber) : currentNumber)} animation={flip ? "fold" : "unfold"} />

        {/* {currentNumber} */}
      </div>
    </div>
  );
};
