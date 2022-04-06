import { nanoid } from "@reduxjs/toolkit";
import List from "../../../common/List";
import Section from "../../../common/Section";
import { skills } from "./skills";

const Skills = () => {
  const skillsWithIndex = skills.map(skill => ({
    ...skill,
    id: nanoid(),
  }));

  return (
    <Section
      title={
        <>
          My skillset includes 🛠️
        </>
      }
      body={<List listContent={skillsWithIndex} />}
    />
  )
}

export default Skills;