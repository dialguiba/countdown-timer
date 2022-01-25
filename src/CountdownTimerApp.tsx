import { CounterBlock } from "@components/CounterBlock";
import { SocialNetworks } from "@components/SocialNetworks";
import "./countdown-timer-app.scoped.scss";

export const CountdownTimerApp = () => {
  return (
    <div className="countdownTimerApp">
      <h1 className="countdownTimerApp__title">WE'RE LAUNCHING SOON</h1>
      <div className="countdownTimerApp__counter">
        <CounterBlock />
      </div>
      <div className="countdownTimerApp__socialNetworks">
        <SocialNetworks />
      </div>
    </div>
  );
};
