import Section from "../../common/Section";
import { Container } from "../../common/Container";
import rocket from "../../images/rocket.png"
import tools from "../../images/tools.png"
import { Image } from "./Image";

const HomePage = () => (
  <Container>
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
);

export default HomePage;