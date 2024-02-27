import UnstyledButton from "../../../../components/UnstyledButton";
import styled from "../../../../styled";
import styles from "./CreateComment.module.css";

export interface CreateCommentProps {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
  };
}

export default function CreateComment({ currentUser }: CreateCommentProps) {
  return (
    <Wrapper>
      <UserProfileImage>
        <source srcSet={currentUser.image.webp} />
        <img src={currentUser.image.png} alt="you're profile image" />
      </UserProfileImage>
      <TextArea placeholder="Add a comment..." />
      <SubmitButton>Send</SubmitButton>
    </Wrapper>
  );
}

const Wrapper = styled("div", styles.wrapper);
const UserProfileImage = styled("picture", styles.userProfileImage);
const TextArea = styled("textarea", styles.textArea);
const SubmitButton = styled(UnstyledButton, styles.submitButton);
