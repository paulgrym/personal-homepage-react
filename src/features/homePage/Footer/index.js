import {
  CallToAction,
  Contact,
  ContactLink,
  Content,
  StyledFooter,
} from "./styled";
import { email } from "../email";
import SocialIcons from "./SocialIcons";

const Footer = () => (
  <StyledFooter id="footer">
    <CallToAction>Let's talk!</CallToAction>
    <Contact>
      <ContactLink href={`mailto:${email}`} title={email}>
        {email}
      </ContactLink>
    </Contact>
    <Content>
      If you are looking for a&nbsp;committed team member with great analytical
      skills and a&nbsp;passion for teamwork, feel free to contact me 😃.
    </Content>
    <SocialIcons />
  </StyledFooter>
);

export default Footer;
