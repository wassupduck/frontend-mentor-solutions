import styles from "./CreateComment.module.css";
import styled from "../../../../styled";
import Button from "../Button";
import VisuallyHidden from "../../../../components/VisuallyHidden";

export interface CreateCommentProps {
  currentUserImage: {
    png: string;
    webp: string;
  };
  isReply?: boolean;
  onSubmit: (commentContent: string) => void;
}

export default function CreateComment({
  currentUserImage,
  isReply = false,
  onSubmit,
}: CreateCommentProps) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      commentContent: { value: string };
    };

    onSubmit(target.commentContent.value);
  };

  return (
    <Wrapper method="post" onSubmit={handleSubmit}>
      <UserProfileImage>
        <source srcSet={currentUserImage.webp} />
        <img src={currentUserImage.png} alt="You're profile image" />
      </UserProfileImage>
      <TextAreaWrapper>
        <VisuallyHidden>Write your comment:</VisuallyHidden>
        <TextArea name="commentContent" placeholder="Add a comment..." />
      </TextAreaWrapper>
      <Button type="submit">{isReply ? "Reply" : "Send"}</Button>
    </Wrapper>
  );
}

const Wrapper = styled("form", styles.wrapper);
const UserProfileImage = styled("picture", styles.userProfileImage);
const TextAreaWrapper = styled("label", styles.textAreaWrapper);
const TextArea = styled("textarea", styles.textArea);
