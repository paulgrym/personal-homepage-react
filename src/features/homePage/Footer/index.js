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
  <StyledFooter>
    <CallToAction>Let's talk!</CallToAction>
    <Contact>
      <ContactLink href={`mailto:${email}`} title={email}>
        {email}
      </ContactLink>
    </Contact>
    <Content>
      I’m always open to new projects whenever I have the time. If you have a website in mind and need some help to make your ideas come to life, feel free to contact me 😃.
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
)

export default Footer;