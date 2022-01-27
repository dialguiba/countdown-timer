import { SocialIcon } from "../SocialIcon";
import "./social-networks.scoped.scss";

export const SocialNetworks = () => {
  return (
    <div className="socialNetworks">
      <SocialIcon anchorUrl="https://facebook.com" imageUrl={`${document.location.href}/images/icon-facebook.svg`} socialNetworkName="facebook" />
      <SocialIcon anchorUrl="https://pinterest.es" imageUrl={`${document.location.href}/images/icon-pinterest.svg`} socialNetworkName="pinterest" />
      <SocialIcon anchorUrl="https://instagram.com" imageUrl={`${document.location.href}/images/icon-instagram.svg`} socialNetworkName="instagram" />
    </div>
  );
};
