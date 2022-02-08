import { AboutSection, Photo, Introduction, Header, Content, ButtonIcon, ButtonText } from "./styled";
import photo from "../../../images/photo.png"
import { ButtonLink } from "../../../common/ButtonLink";


const PersonInfo = () => (
  <AboutSection>
    <Photo src={photo} alt="Paulina Grymulska" />
    <div>
      <Introduction>This is</Introduction>
      <Header>Paulina Grymulska</Header>
      <Content>I'm an aspiring Frontend Developer, who is dedicated to learning React.
        Currently, I'm  looking for a new job opportunities, so if you like my projects please don't hesitate to contact me 😃💻.</Content>
      <ButtonLink href="mailto:paulina.grymulska@gmail.com">
        <ButtonIcon />
        <span>Hire Me</span>
      </ButtonLink>
    </div>
  </AboutSection>
);

export default PersonInfo;