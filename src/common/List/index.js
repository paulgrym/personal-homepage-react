import { StyledList, ListItem } from "./styled";

const List = ({ listContent }) => {
  return (
    <StyledList>
      {listContent.map(skill => (
        <ListItem key={skill.id}>{skill.content}</ListItem>
      ))}

    </StyledList>
  )
};

export default List;