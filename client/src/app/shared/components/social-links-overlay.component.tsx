import LinkedInIcon from "../../../assets/icons/linkedin.svg?react";
import GitHubIcon from "../../../assets/icons/github.svg?react";
import TelegramIcon from "../../../assets/icons/telegram.svg?react";

const SocialLinksOverlay = () => {
  return (
    <div className="py-1 px-2 flex items-center justify-center gap-2 fixed bottom-0 left-0 border-t-2 border-r-2 border-black rounded-tr-md">
      <span>Connect with me!</span>
      <a href="https://www.linkedin.com/in/vadym-mamchur" target="_blank">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/vmamchur" target="_blank">
        <GitHubIcon />
      </a>
      <a href="https://t.me/v_mamchur" target="_blank">
        <TelegramIcon />
      </a>
    </div>
  );
};

export default SocialLinksOverlay;
