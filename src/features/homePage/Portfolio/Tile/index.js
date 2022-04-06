import { Description, Header, Container, Term, Link, StyledTile, LinkItem } from "./styled";

const Tile = ({ title, description, demoUrl, repoUrl }) => {

  return (
    <StyledTile>
      <Header>{title}</Header>
      <Description>{description}</Description>
      <Container>
        <Term>Demo:</Term>
        <LinkItem>
          <Link href={demoUrl} target="_blank" rel="noreferrer noopener">Project demo</Link>
        </LinkItem>
      </Container>
      <Container>
        <Term>Code:</Term>
        <LinkItem>
          <Link href={repoUrl} target="_blank" rel="noreferrer noopener">Github Repository</Link>
        </LinkItem>
      </Container>
    </StyledTile>
  );
};

export default Tile;