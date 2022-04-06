import { Container } from "../../common/Container";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import PersonInfo from "./PersonInfo";
import Skills from "./Skills";
import WantToLearn from "./WantToLearn";
import Footer from "./Footer";
import Portfolio from "./Portfolio";

const HomePage = () => {

  return (
    <Container>
      <ThemeSwitcher />
      <PersonInfo />
      <Skills />
      <WantToLearn />
      <Portfolio />
      <Footer />
    </Container>
  )
};

export default HomePage;