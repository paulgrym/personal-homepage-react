import { Description, Header, Container, Term, Link, StyledTile, LinkItem } from "./styled";

const Tile = ({ title, description, demoUrl, repoUrl }) => {

  return (
    <StyledTile>
      <Header>{title}</Header>
      <Description>{description}</Description>
      <Container>
        <Term>Demo:</Term>
        <LinkItem>
          <Link>{demoUrl}</Link>
        </LinkItem>
      </Container>
      <Container>
        <Term>Code:</Term>
        <LinkItem>
          <Link>{repoUrl}</Link>
        </LinkItem>
      </Container>
    </StyledTile>
  );
};

export default Tile;