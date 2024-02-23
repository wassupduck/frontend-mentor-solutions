import styles from "./Comment.module.css";

import styled from "../../../../styled";
import CommentVotes from "../CommentVotes";
import UnstyledButton from "../../../../components/UnstyledButton";

import userAvatarPngUrl from "../../assets/images/avatars/image-amyrobson.png";
import userAvatarWebpUrl from "../../assets/images/avatars/image-amyrobson.webp";
import replyIconUrl from "../../assets/images/icon-reply.svg";

export default function Comment() {
  return (
    <Wrapper>
      <CommentVotes />
      <Body>
        <TopRow>
          <MetadataGroup>
            <UserProfileImage>
              <source srcSet={userAvatarWebpUrl} />
              <img src={userAvatarPngUrl} alt="commentor's profile image" />
            </UserProfileImage>
            <UserName>amyrobson</UserName>
            <p>1 month ago</p>
          </MetadataGroup>
          <ActionButton />
        </TopRow>
        <p>
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
      </Body>
    </Wrapper>
  );
}

const Wrapper = styled("article", styles.wrapper);
const Body = styled("div", styles.body);
const TopRow = styled("div", styles.topRow);
const MetadataGroup = styled("div", styles.metadataGroup);
const UserName = styled("p", styles.userName);
const UserProfileImage = styled("picture", styles.userProfileImage);

function ActionButton() {
  return (
    <UnstyledButton className={styles.actionButton}>
      <ActionButtonIcon src={replyIconUrl} />
      <p>Reply</p>
    </UnstyledButton>
  );
}

const ActionButtonIcon = styled("img", styles.actionButtonIcon);
