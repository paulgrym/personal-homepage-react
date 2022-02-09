import { nanoid } from "@reduxjs/toolkit";
import List from "../../../common/List";
import Section from "../../../common/Section";
import { Image } from "../Image";
import { wantToLearn } from "./wantToLearn";
import rocket from "../../../images/rocket.png";

const WantToLearn = () => {
  const wantToLearnWithIndex = wantToLearn.map(skill => ({
    ...skill,
    id: nanoid(),
  }));

  return (
    <Section
      title={
        <>
          What i want to learn next<Image src={rocket} alt=" " />
        </>
      }
      body={<List listContent={wantToLearnWithIndex} />}
    />
  )
}

export default WantToLearn;