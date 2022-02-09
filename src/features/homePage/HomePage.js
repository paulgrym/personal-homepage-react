import { Container } from "../../common/Container";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import PersonInfo from "./PersonInfo";
import Skills from "./Skills";
import WantToLearn from "./WantToLearn";
import Footer from "./Footer";

const HomePage = ({ toggleTheme, darkModeOn }) => {

  return (
    <Container>
      <ThemeSwitcher toggleTheme={toggleTheme} darkModeOn={darkModeOn} />
      <PersonInfo />
      <Skills />
      <WantToLearn />

      <Footer />
    </Container>
  )
};

export default HomePage;