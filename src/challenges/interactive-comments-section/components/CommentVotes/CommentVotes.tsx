import styles from "./CommentVotes.module.css";

import UnstyledButton from "../../../../components/UnstyledButton";

import plusIconUrl from "../../assets/images/icon-plus.svg";
import minusIconUrl from "../../assets/images/icon-minus.svg";
import styled from "../../../../styled";

interface CommentVotesProps {
  voteCount: number;
}

export default function CommentVotes({ voteCount }: CommentVotesProps) {
  return (
    <Wrapper>
      <VoteButton>
        <VoteButtonIcon
          style={{
            maskImage: `url(${plusIconUrl})`,
            WebkitMaskImage: `url(${plusIconUrl})`,
          }}
        />
      </VoteButton>
      <Votes>{voteCount}</Votes>
      <VoteButton>
        <VoteButtonIcon
          style={{
            maskImage: `url(${minusIconUrl})`,
            WebkitMaskImage: `url(${minusIconUrl})`,
          }}
          className={styles.downVoteButtonIcon}
        />
      </VoteButton>
    </Wrapper>
  );
}

const Wrapper = styled("div", styles.wrapper);
const Votes = styled("span", styles.votes);
const VoteButton = styled(UnstyledButton, styles.voteButton);
const VoteButtonIcon = styled("div", styles.voteButtonIcon);
