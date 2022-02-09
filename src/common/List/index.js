import { StyledList, ListItem } from "./styled";

const List = ({ listContent }) => {
  return (
    <StyledList>
      {listContent.map(({ id, content }) => (
        <ListItem key={id}>{content}</ListItem>
      ))}

    </StyledList>
  )
};

export default List;