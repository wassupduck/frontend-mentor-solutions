import styles from "./CommentVotes.module.css";

import UnstyledButton from "../../../../components/UnstyledButton";

import plusIconUrl from "../../assets/images/icon-plus.svg";
import minusIconUrl from "../../assets/images/icon-minus.svg";
import styled from "../../../../styled";

export default function CommentVotes() {
  return (
    <Wrapper>
      <UnstyledButton>
        <img src={plusIconUrl} />
      </UnstyledButton>
      <Votes>12</Votes>
      <UnstyledButton>
        <img src={minusIconUrl} />
      </UnstyledButton>
    </Wrapper>
  );
}

const Wrapper = styled("div", styles.wrapper);
const Votes = styled("span", styles.votes);
