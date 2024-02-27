import styles from "./CommentsSection.module.css";

import Comment from "../Comment";

import { COMMENTS, CURRENT_USER } from "../../data";
import styled from "../../../../styled";

export default function CommentsSection() {
  return (
    <section>
      {COMMENTS.map((comment) => (
        <div>
          <CommentWrapper key={comment.id}>
            <Comment
              comment={comment}
              byCurrentUser={comment.user.username === CURRENT_USER.username}
            />
          </CommentWrapper>
          {comment.replies.length > 0 && (
            <Replies>
              {comment.replies.map((comment) => (
                <CommentWrapper key={comment.id}>
                  <Comment
                    comment={comment}
                    byCurrentUser={
                      comment.user.username === CURRENT_USER.username
                    }
                  />
                </CommentWrapper>
              ))}
            </Replies>
          )}
        </div>
      ))}
    </section>
  );
}

const CommentWrapper = styled("div", styles.commentWrapper);
const Replies = styled("div", styles.replies);
