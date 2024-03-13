import styles from "./CommentsSection.module.css";

import { CommentByCurrentUser, CommentByOtherUser } from "../Comment";

import { COMMENTS, CURRENT_USER } from "../../data";
import styled from "../../../../styled";
import CreateComment from "../CreateComment";
import { useState } from "react";
import { Vote } from "../../types";

const generateCommentId = () => Math.floor(Math.random() * 100000);

export default function CommentsSection() {
  const [comments, setComments] = useState(COMMENTS);

  const handleCreateComment = (commentContent: string) => {
    setComments([
      ...comments,
      {
        id: generateCommentId(),
        content: commentContent,
        createdAt: "Today",
        score: 0,
        user: {
          image: { ...CURRENT_USER.image },
          username: CURRENT_USER.username,
        },
        replies: [],
        currentUserVote: null,
      },
    ]);
  };

  const handleCommentVote = (commentId: number, vote: Vote | null) => {
    const comment = comments.find(({ id }) => id === commentId);

    if (!comment) {
      throw new Error("comment not found");
    }
    if (comment.user.username === CURRENT_USER.username) {
      throw new Error("can't vote on own comment");
    }
    if (vote !== undefined && comment.currentUserVote === vote) {
      throw new Error("already voted");
    }

    const newScore =
      comment.score +
      (comment.currentUserVote === Vote.UP
        ? -1
        : comment.currentUserVote === Vote.DOWN
        ? 1
        : 0) +
      (vote === Vote.UP ? 1 : vote === Vote.DOWN ? -1 : 0);

    setComments(
      comments.map((c) => {
        if (c.id === comment.id) {
          return {
            ...c,
            score: newScore,
            currentUserVote: vote,
          };
        }
        return c;
      })
    );
  };

  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentWithReplies
          key={comment.id}
          comment={comment}
          onChangeVote={handleCommentVote}
        />
      ))}
      <CreateComment
        currentUserImage={CURRENT_USER.image}
        onSubmit={handleCreateComment}
      />
    </Wrapper>
  );
}

function CommentWithReplies({
  comment,
  onChangeVote,
}: {
  comment: (typeof COMMENTS)[0];
  onChangeVote: (commentId: number, vote: Vote | null) => void;
}) {
  return (
    <>
      {comment.user.username === CURRENT_USER.username ? (
        <CommentByCurrentUser
          comment={comment}
          onDelete={() => {}}
          onUpdate={() => {}}
        />
      ) : (
        <CommentByOtherUser
          comment={comment}
          onReply={() => {}}
          onChangeVote={(vote) => onChangeVote(comment.id, vote)}
        />
      )}
      {comment.replies.length > 0 && (
        <Replies className={styles.commentColumn}>
          {comment.replies.map((comment) =>
            comment.user.username === CURRENT_USER.username ? (
              <CommentByCurrentUser
                key={comment.id}
                comment={comment}
                onDelete={() => {}}
                onUpdate={() => {}}
              />
            ) : (
              <CommentByOtherUser
                key={comment.id}
                comment={comment}
                onReply={() => {}}
                onChangeVote={(vote) => onChangeVote(comment.id, vote)}
              />
            )
          )}
        </Replies>
      )}
    </>
  );
}

const Wrapper = styled("section", styles.commentColumn);
const Replies = styled("div", styles.replies);
