import styles from "./CommentsSection.module.css";

import { CommentByCurrentUser, CommentByOtherUser } from "../Comment";

import { COMMENTS, CURRENT_USER } from "../../data";
import styled from "../../../../styled";
import CreateComment from "../CreateComment";

export default function CommentsSection() {
  return (
    <section className={styles.commentColumn}>
      {COMMENTS.map((comment) => (
        <CommentWithReplies key={comment.id} comment={comment} />
      ))}
      <CreateComment
        currentUserImage={CURRENT_USER.image}
        onSubmit={(commentContent) => {
          console.log(commentContent);
        }}
      />
    </section>
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

const Replies = styled("div", styles.replies);
