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
  const commentVotes = (
    <CommentVotes
      voteCount={comment.score}
      onUpVoteClick={() => {}}
      onDownVoteClick={() => {}}
    />
  );
  const actionButtonGroup = <ActionButtonGroup byCurrentUser={byCurrentUser} />;
  return (
    <Wrapper>
      <DesktopOnly>{commentVotes}</DesktopOnly>
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
          <DesktopOnly>{actionButtonGroup}</DesktopOnly>
        </TopRow>
        <p>
          {comment.replyingTo && <ReplyingTo>@{comment.replyingTo}</ReplyingTo>}{" "}
          {comment.content}
        </p>
      </Body>
      <MobileActions>
        {commentVotes}
        {actionButtonGroup}
      </MobileActions>
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
const ActionButtonGroupWrapper = styled("div", styles.actionButtonGroup);
const ReplyingTo = styled("a", styles.replyingTo);
const MobileActions = styled("div", styles.mobileActions);
const DesktopOnly = styled("div", styles.desktopOnly);
const ActionButtonIcon = styled("div", styles.actionButtonIcon);

function ActionButton({
  text,
  iconUrl,
  color,
  activeColor,
}: {
  text: string;
  iconUrl: string;
  color: string;
  activeColor: string;
}) {
  return (
    <UnstyledButton
      style={
        {
          "--action-button-color": color,
          "--action-button-active-color": activeColor,
        } as React.CSSProperties
      }
      className={styles.actionButton}
    >
      <ActionButtonIcon
        style={{
          maskImage: `url(${iconUrl})`,
          WebkitMaskImage: `url(${iconUrl})`,
        }}
      />
      <p>{text}</p>
    </UnstyledButton>
  );
}

const ReplyButton = () => (
  <ActionButton
    text="Reply"
    iconUrl={replyIconUrl}
    color="var(--color-primary-blue)"
    activeColor="var(--color-primary-light-blue)"
  />
);

const EditButton = () => (
  <ActionButton
    text="Edit"
    iconUrl={editIconUrl}
    color="var(--color-primary-blue)"
    activeColor="var(--color-primary-light-blue)"
  />
);

const DeleteButton = () => (
  <ActionButton
    text="Delete"
    iconUrl={deleteIconUrl}
    color="var(--color-primary-red)"
    activeColor="var(--color-primary-light-red)"
  />
);

function ActionButtonGroup({ byCurrentUser }: { byCurrentUser: boolean }) {
  // TODO: Improve props
  return (
    <ActionButtonGroupWrapper>
      {byCurrentUser ? (
        <>
          <DeleteButton />
          <EditButton />
        </>
      ) : (
        <ReplyButton />
      )}
    </ActionButtonGroupWrapper>
  );
}
