import { Container } from "../../common/Container";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import PersonInfo from "./PersonInfo";
import Skills from "./Skills";
import WantToLearn from "./WantToLearn";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

const Homepage = () => {
  return (
    <Container>
      <ThemeSwitcher />
      <PersonInfo />
      <main>
        <Skills />
        <WantToLearn />
        <Portfolio />
      </main>
      <Footer />
    </Container>
  );
};

export default Homepage;
