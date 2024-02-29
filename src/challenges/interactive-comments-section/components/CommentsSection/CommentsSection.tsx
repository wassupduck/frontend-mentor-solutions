import styles from "./CommentsSection.module.css";

import Comment from "../Comment";

import { COMMENTS, CURRENT_USER } from "../../data";
import styled from "../../../../styled";
import CreateComment from "../CreateComment";

export default function CommentsSection() {
  return (
    <section className={styles.commentColumn}>
      {COMMENTS.map((comment) => (
        <CommentWithReplies comment={comment} key={comment.id} />
      ))}
      <CreateComment currentUser={CURRENT_USER} onSubmit={() => {}} />
    </section>
  );
}

function CommentWithReplies({ comment }: { comment: (typeof COMMENTS)[0] }) {
  return (
    <>
      <Comment
        comment={comment}
        byCurrentUser={comment.user.username === CURRENT_USER.username}
      />
      {comment.replies.length > 0 && (
        <Replies className={styles.commentColumn}>
          {comment.replies.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              byCurrentUser={comment.user.username === CURRENT_USER.username}
            />
          ))}
        </Replies>
      )}
    </>
  );
}
const Replies = styled("div", styles.replies);
