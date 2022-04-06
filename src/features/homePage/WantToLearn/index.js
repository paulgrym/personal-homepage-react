import { nanoid } from "@reduxjs/toolkit";
import List from "../../../common/List";
import Section from "../../../common/Section";
import { wantToLearn } from "./wantToLearn";

const WantToLearn = () => {
  const wantToLearnWithIndex = wantToLearn.map(skill => ({
    ...skill,
    id: nanoid(),
  }));

  return (
    <Section
      title={
        <>
          What i want to learn next &#128640;
        </>
      }
      body={<List listContent={wantToLearnWithIndex} />}
    />
  )
}

export default WantToLearn;