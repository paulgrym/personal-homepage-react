import { Description, Header, Container, Term, Link, StyledTile, LinkItem } from "./styled";

const Tile = ({ title, description, demoUrl, repoUrl, update }) => {

  return (
    <StyledTile>
      <Header>{title}</Header>
      <Description>{description}</Description>
      <Container>
        <Term>Demo:</Term>
        <LinkItem>
          <Link href={demoUrl} target="_blank" rel="noreferrer noopener">{demoUrl}</Link>
        </LinkItem>
      </Container>
      <Container>
        <Term>Code:</Term>
        <LinkItem>
          <Link href={repoUrl} target="_blank" rel="noreferrer noopener">{repoUrl}</Link>
        </LinkItem>
        {update}
      </Container>
    </StyledTile>
  );
};

export default Tile;