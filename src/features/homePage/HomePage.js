import Section from "../../common/Section";
import { Container } from "../../common/Container";
import rocket from "../../images/rocket.png"
import tools from "../../images/tools.png"
import { Image } from "./Image";
import PersonInfo from "./PersonInfo";

const HomePage = ({ toggleTheme }) => {
  return (
    <Container>
      <button onClick={toggleTheme}>Theme</button>
      <PersonInfo />
      <Section
        title={
          <>
            My skills<Image src={tools} alt=" " />
          </>
        }
        body={""}
      />

      <Section
        title={
          <>
            What i want to learn next<Image src={rocket} alt=" " />
          </>
        }
        body={""}
      />

    </Container>
  )
};

export default HomePage;