import styles from "./CreateComment.module.css";
import styled from "../../../../styled";
import Button from "../Button";

export interface CreateCommentProps {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
  };
  isReply?: boolean;
  onSubmit: () => void;
}

export default function CreateComment({
  currentUser,
  isReply = false,
  onSubmit,
}: CreateCommentProps) {
  return (
    <Wrapper>
      <UserProfileImage>
        <source srcSet={currentUser.image.webp} />
        <img src={currentUser.image.png} alt="you're profile image" />
      </UserProfileImage>
      <TextArea placeholder="Add a comment..." />
      <Button onClick={onSubmit}>{isReply ? "Reply" : "Send"}</Button>
    </Wrapper>
  );
}

const Wrapper = styled("div", styles.wrapper);
const UserProfileImage = styled("picture", styles.userProfileImage);
const TextArea = styled("textarea", styles.textArea);
