import { RepoLink } from "../RepoLink";
import {
  Description,
  Header,
  Container,
  Term,
  StyledTile,
  LinkItem,
} from "./styled";

const Tile = ({ title, description, demoUrl, repoUrl }) => {
  return (
    <StyledTile>
      <Header>{title}</Header>
      <Description>{description}</Description>
      {!!demoUrl && (
        <Container>
          <Term>Demo:</Term>
          <LinkItem>
            <RepoLink href={demoUrl} target="_blank" rel="noreferrer noopener">
              Project demo
            </RepoLink>
          </LinkItem>
        </Container>
      )}
      <Container>
        <Term>Code:</Term>
        <LinkItem>
          <RepoLink href={repoUrl} target="_blank" rel="noreferrer noopener">
            Github Repository
          </RepoLink>
        </LinkItem>
      </Container>
    </StyledTile>
  );
};

export default Tile;
