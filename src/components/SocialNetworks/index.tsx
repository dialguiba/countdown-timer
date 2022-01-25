import { SocialIcon } from "../SocialIcon";
import "./social-networks.scoped.scss";

export const SocialNetworks = () => {
  return (
    <div className="socialNetworks">
      <SocialIcon anchorUrl="" imageUrl="/images/icon-facebook.svg" socialNetworkName="facebook" />
      <SocialIcon anchorUrl="" imageUrl="/images/icon-pinterest.svg" socialNetworkName="pinterest" />
      <SocialIcon anchorUrl="" imageUrl="/images/icon-instagram.svg" socialNetworkName="instagram" />
    </div>
  );
};
