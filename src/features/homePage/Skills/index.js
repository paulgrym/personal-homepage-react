import { nanoid } from "@reduxjs/toolkit";
import List from "../../../common/List";
import Section from "../../../common/Section";
import { Image } from "../Image";
import { skills } from "./skills";
import tools from "../../../images/tools.png";

const Skills = () => {
  const skillsWithIndex = skills.map(skill => ({
    ...skill,
    id: nanoid(),
  }));

  return (
    <Section
      title={
        <>
          My skillset insludes <Image src={tools} alt=" " />
        </>
      }
      body={<List listContent={skillsWithIndex} />}
    />
  )
}

export default Skills;