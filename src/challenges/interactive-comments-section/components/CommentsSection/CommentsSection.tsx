import styles from "./CommentsSection.module.css";

import { CommentByCurrentUser, CommentByOtherUser } from "../Comment";

import { COMMENTS, CURRENT_USER } from "../../data";
import styled from "../../../../styled";
import CreateComment from "../CreateComment";
import { useState } from "react";

export default function CommentsSection() {
  const [comments, setComments] = useState(COMMENTS);

  const handleCreateComment = (commentContent: string) => {
    const generateId = () => Math.floor(Math.random() * 100000);
    setComments([
      ...comments,
      {
        id: generateId(),
        content: commentContent,
        createdAt: "Today",
        score: 0,
        user: {
          image: { ...CURRENT_USER.image },
          username: CURRENT_USER.username,
        },
        replies: [],
      },
    ]);
  };

  return (
    <Wrapper>
      {comments.map((comment) => (
        <CommentWithReplies key={comment.id} comment={comment} />
      ))}
      <CreateComment
        currentUserImage={CURRENT_USER.image}
        onSubmit={handleCreateComment}
      />
    </Wrapper>
  );
}

function CommentWithReplies({ comment }: { comment: (typeof COMMENTS)[0] }) {
  return (
    <>
      {comment.user.username === CURRENT_USER.username ? (
        <CommentByCurrentUser
          comment={comment}
          onDelete={() => {}}
          onUpdate={() => {}}
        />
      ) : (
        <CommentByOtherUser comment={comment} onReply={() => {}} />
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
