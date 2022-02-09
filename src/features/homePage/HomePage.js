import { Container } from "../../common/Container";
import PersonInfo from "./PersonInfo";
import ThemeSwitcher from "../../common/ThemeSwitcher";
import Skills from "./Skills";
import WantToLearn from "./WantToLearn";


const HomePage = ({ toggleTheme, darkModeOn }) => {

  return (
    <Container>
      <ThemeSwitcher toggleTheme={toggleTheme} darkModeOn={darkModeOn} />
      <PersonInfo />
      <Skills />
      <WantToLearn />
    </Container>
  )
};

export default HomePage;