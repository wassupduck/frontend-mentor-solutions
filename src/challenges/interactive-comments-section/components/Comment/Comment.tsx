import styles from "./Comment.module.css";

import styled from "../../../../styled";
import CommentVotes from "../CommentVotes";

export default function Comment() {
  return (
    <Wrapper>
      <CommentVotes />
    </Wrapper>
  );
}

const Wrapper = styled("article", styles.wrapper);
