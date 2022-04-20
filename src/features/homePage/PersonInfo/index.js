import {
  AboutSection,
  Photo,
  Introduction,
  Header,
  Content,
  ButtonIcon,
} from "./styled";
import photo from "./images/photo.jpg";
import { ButtonLink } from "../../../common/ButtonLink";
import { Link } from "react-scroll";

const PersonInfo = () => (
  <AboutSection>
    <Photo src={photo} alt="Paulina Grymulska" />
    <div>
      <Introduction>This is</Introduction>
      <Header>Paulina Grymulska</Header>
      <Content>
        I'm an aspiring Frontend Developer and a feedback lover, who is
        dedicated to learning React. Currently, I'm looking for a new job
        opportunities, so if you like my projects please don't hesitate to
        contact me 😃💻.
      </Content>
      <Link to="footer" smooth={true} duration={1000} spy={true}>
        <ButtonLink as="span">
          <ButtonIcon />
          <span>Hire Me</span>
        </ButtonLink>
      </Link>
    </div>
  </AboutSection>
);

export default PersonInfo;
