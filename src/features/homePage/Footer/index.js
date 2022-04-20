import {
  CallToAction,
  Contact,
  ContactLink,
  Content,
  Item,
  Link,
  Socials,
  StyledFooter
} from "./styled";
import { email } from "../email";
import { socials } from "./socials";

const Footer = () => (
  <StyledFooter id="footer">
    <CallToAction>Let's talk!</CallToAction>
    <Contact>
      <ContactLink href={`mailto:${email}`} title={email}>
        {email}
      </ContactLink>
    </Contact>
    <Content>
      If you are looking for a committed team member with great analytical skills and a passion for teamwork, feel free to contact me 😃.
    </Content>
    <Socials>
      {socials.map(({ name, address, Icon }) => (
        <Item key={name}>
          <Link href={address} title={name} target="_blank" rel="noreferrer noopener">
            <Icon />
          </Link>
        </Item>
      ))}
    </Socials>
  </StyledFooter>
);

export default Footer;