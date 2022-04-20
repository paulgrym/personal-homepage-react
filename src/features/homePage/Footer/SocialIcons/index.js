import { socials } from "./socials";
import { Item, Link, StyledSocialIcons } from "./styled";

const SocialIcons = () => (
  <StyledSocialIcons>
    {socials.map(({ name, address, Icon }) => (
      <Item key={name}>
        <Link
          href={address}
          title={name}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon />
        </Link>
      </Item>
    ))}
  </StyledSocialIcons>
);

export default SocialIcons;
