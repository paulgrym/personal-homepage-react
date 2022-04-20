import { ReactComponent as GithubIcon } from "./images/github.svg";
import { ReactComponent as InstagramIcon } from "./images/instagram.svg";
import { ReactComponent as LinkedInIcon } from "./images/linkedIn.svg";
import { ReactComponent as FacebookIcon } from "./images/facebook.svg";
import { styleIcon } from "./styled";

export const socials = [
  {
    name: "Github",
    address: "https://github.com/paulgrym",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Instagram",
    address: "https://www.instagram.com/grymulska/",
    Icon: styleIcon(InstagramIcon),
  },
  {
    name: "LinkedIn",
    address: "https://www.linkedin.com/in/paulina-grymulska/",
    Icon: styleIcon(LinkedInIcon),
  },
  {
    name: "Facebook",
    address: "https://www.facebook.com/paulina.grymulska/",
    Icon: styleIcon(FacebookIcon),
  },
];
