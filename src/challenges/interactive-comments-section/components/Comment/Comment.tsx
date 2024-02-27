import styles from "./Comment.module.css";

import styled from "../../../../styled";
import CommentVotes from "../CommentVotes";
import UnstyledButton from "../../../../components/UnstyledButton";

import replyIconUrl from "../../assets/images/icon-reply.svg";
import editIconUrl from "../../assets/images/icon-edit.svg";
import deleteIconUrl from "../../assets/images/icon-delete.svg";

interface CommentProps {
  comment: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
  };
  byCurrentUser: boolean;
}

export default function Comment({ comment, byCurrentUser }: CommentProps) {
  console.log(comment.replyingTo);
  return (
    <Wrapper>
      <CommentVotes voteCount={comment.score} />
      <Body>
        <TopRow>
          <MetadataGroup>
            <UserProfileImage>
              <source srcSet={comment.user.image.webp} />
              <img
                src={comment.user.image.png}
                alt="commentor's profile image"
              />
            </UserProfileImage>
            <UserName>
              {comment.user.username} {byCurrentUser && <YouTag />}
            </UserName>
            <p>{comment.createdAt}</p>
          </MetadataGroup>
          <ActionButtonGroup>
            {byCurrentUser ? (
              <>
                <DeleteButton />
                <EditButton />
              </>
            ) : (
              <ReplyButton />
            )}
          </ActionButtonGroup>
        </TopRow>
        <p>
          {comment.replyingTo && <ReplyingTo>@{comment.replyingTo}</ReplyingTo>}{" "}
          {comment.content}
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
const YouTag = styled("span", styles.youTag, { children: <span>you</span> });
const UserProfileImage = styled("picture", styles.userProfileImage);
const ActionButtonGroup = styled("div", styles.actionButtonGroup);
const ReplyingTo = styled("a", styles.replyingTo);

function ActionButton({
  text,
  iconUrl,
  color,
}: {
  text: string;
  iconUrl: string;
  color: string;
}) {
  return (
    <UnstyledButton
      style={{ "--action-button-color": color } as React.CSSProperties}
      className={styles.actionButton}
    >
      <ActionButtonIcon src={iconUrl} />
      <p>{text}</p>
    </UnstyledButton>
  );
}

const ActionButtonIcon = styled("img", styles.actionButtonIcon);

const ReplyButton = () => (
  <ActionButton
    text="Reply"
    iconUrl={replyIconUrl}
    color="var(--color-primary-blue)"
  />
);

const EditButton = () => (
  <ActionButton
    text="Edit"
    iconUrl={editIconUrl}
    color="var(--color-primary-blue)"
  />
);

const DeleteButton = () => (
  <ActionButton
    text="Delete"
    iconUrl={deleteIconUrl}
    color="var(--color-primary-red)"
  />
);
