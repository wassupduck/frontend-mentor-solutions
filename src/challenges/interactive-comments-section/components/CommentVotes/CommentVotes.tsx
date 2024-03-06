import styles from "./CommentVotes.module.css";

import UnstyledButton from "../../../../components/UnstyledButton";

import plusIconUrl from "../../assets/images/icon-plus.svg";
import minusIconUrl from "../../assets/images/icon-minus.svg";
import styled from "../../../../styled";
import clsx from "clsx";
import { Vote } from "../../types";

export interface CommentVotesProps {
  voteCount: number;
  canVote: boolean;
  currentVote?: Vote;
  onChangeVote?: (vote: Vote | null) => void;
}

export default function CommentVotes({
  voteCount,
  canVote,
  currentVote,
  onChangeVote,
}: CommentVotesProps) {
  const handleChangeVote = (vote: Vote) =>
    onChangeVote && onChangeVote(vote === currentVote ? null : vote);

  return (
    <Wrapper>
      <VoteButton onClick={() => handleChangeVote(Vote.UP)} disabled={!canVote}>
        <VoteButtonIcon
          style={{
            maskImage: `url(${plusIconUrl})`,
            WebkitMaskImage: `url(${plusIconUrl})`,
          }}
          className={clsx(currentVote === Vote.UP && styles.active)}
        />
      </VoteButton>
      <Votes>{voteCount}</Votes>
      <VoteButton
        onClick={() => handleChangeVote(Vote.DOWN)}
        disabled={!canVote}
      >
        <VoteButtonIcon
          style={{
            maskImage: `url(${minusIconUrl})`,
            WebkitMaskImage: `url(${minusIconUrl})`,
          }}
          className={clsx(
            styles.downVoteButtonIcon,
            currentVote === Vote.DOWN && styles.active
          )}
        />
      </VoteButton>
    </Wrapper>
  );
}

const Wrapper = styled("div", styles.wrapper);
const Votes = styled("span", styles.votes);
const VoteButton = styled(UnstyledButton, styles.voteButton);
const VoteButtonIcon = styled("div", styles.voteButtonIcon);
