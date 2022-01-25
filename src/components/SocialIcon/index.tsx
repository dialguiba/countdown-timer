import "./social-icon.scss";

export const SocialIcon = ({ imageUrl, anchorUrl, socialNetworkName }: { imageUrl: string; anchorUrl: string; socialNetworkName: string }) => {
  return (
    <a href={anchorUrl} className="socialIcon">
      <img className="socialIcon__icon" src={imageUrl} alt={socialNetworkName} />
    </a>
  );
};
