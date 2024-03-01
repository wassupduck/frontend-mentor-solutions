import styles from "./Comment.module.css";

import styled from "../../../../styled";
import CommentVotes from "../CommentVotes";
import UnstyledButton from "../../../../components/UnstyledButton";

import replyIconUrl from "../../assets/images/icon-reply.svg";
import editIconUrl from "../../assets/images/icon-edit.svg";
import deleteIconUrl from "../../assets/images/icon-delete.svg";
import { UnstyledButtonProps } from "../../../../components/UnstyledButton/UnstyledButton";
import { useState } from "react";
import Button from "../Button";

export interface CommentBaseProps {
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
  isByCurrentUser: boolean;
}

export interface CommentByCurrentUserProps extends CommentBaseProps {
  isByCurrentUser: true;
  onDelete: () => void;
  onUpdate: (content: string) => void;
}

export interface CommentByOtherUserProps extends CommentBaseProps {
  isByCurrentUser: false;
  onReply: () => void;
}

export type CommentProps = CommentByCurrentUserProps | CommentByOtherUserProps;

export function Comment({ comment, ...props }: CommentProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (newContent: string) => {
    if (!props.isByCurrentUser) {
      return;
    }
    props.onUpdate(newContent);
    setIsEditing(false);
  };

  const commentVotes = (
    <CommentVotes
      voteCount={comment.score}
      onUpVoteClick={() => {}}
      onDownVoteClick={() => {}}
    />
  );
  const actionButtonGroup = (
    <ActionButtonGroup>
      {props.isByCurrentUser ? (
        <>
          <DeleteButton onClick={props.onDelete} />
          <EditButton onClick={() => setIsEditing(true)} disabled={isEditing} />
        </>
      ) : (
        <ReplyButton onClick={props.onReply} />
      )}
    </ActionButtonGroup>
  );
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
              {comment.user.username} {props.isByCurrentUser && <YouTag />}
            </UserName>
            <p>{comment.createdAt}</p>
          </MetadataGroup>
          <DesktopOnly>{actionButtonGroup}</DesktopOnly>
        </TopRow>
        {isEditing ? (
          <EditComment
            initialContent={comment.content}
            onCancel={() => setIsEditing(false)}
            onSave={handleUpdate}
          />
        ) : (
          <p>
            {comment.replyingTo && (
              <ReplyingTo>@{comment.replyingTo}</ReplyingTo>
            )}{" "}
            {comment.content}
          </p>
        )}
      </Body>
      <MobileActions>
        {commentVotes}
        {actionButtonGroup}
      </MobileActions>
    </Wrapper>
  );
}

export const CommentByCurrentUser = (
  props: Omit<CommentByCurrentUserProps, "isByCurrentUser">
) => <Comment isByCurrentUser={true} {...props} />;

export const CommentByOtherUser = (
  props: Omit<CommentByOtherUserProps, "isByCurrentUser">
) => <Comment isByCurrentUser={false} {...props} />;

interface EditCommentProps {
  initialContent: string;
  onCancel: () => void;
  onSave: (content: string) => void;
}

function EditComment({ initialContent, onCancel, onSave }: EditCommentProps) {
  const [content, setContent] = useState(initialContent);
  return (
    <>
      <TextArea value={content} onChange={(e) => setContent(e.target.value)}>
        {content}
      </TextArea>
      <EditCommentButtonGroup>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={() => onSave(content)}>Update</Button>
      </EditCommentButtonGroup>
    </>
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
const MobileActions = styled("div", styles.mobileActions);
const DesktopOnly = styled("div", styles.desktopOnly);
const ActionButtonIcon = styled("div", styles.actionButtonIcon);
const TextArea = styled("textarea", styles.textArea);
const EditCommentButtonGroup = styled("div", styles.editCommentButtonGroup);

interface ActionButtonProps extends UnstyledButtonProps {
  text: string;
  iconUrl: string;
  color: string;
  activeColor: string;
}

function ActionButton({
  text,
  iconUrl,
  color,
  activeColor,
  ...delegated
}: ActionButtonProps) {
  return (
    <UnstyledButton
      style={
        {
          "--action-button-color": color,
          "--action-button-active-color": activeColor,
        } as React.CSSProperties
      }
      className={styles.actionButton}
      {...delegated}
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

const ReplyButton = (props: Partial<ActionButtonProps>) => (
  <ActionButton
    text="Reply"
    iconUrl={replyIconUrl}
    color="var(--color-primary-blue)"
    activeColor="var(--color-primary-light-blue)"
    {...props}
  />
);

const EditButton = (props: Partial<ActionButtonProps>) => (
  <ActionButton
    text="Edit"
    iconUrl={editIconUrl}
    color="var(--color-primary-blue)"
    activeColor="var(--color-primary-light-blue)"
    {...props}
  />
);

const DeleteButton = (props: Partial<ActionButtonProps>) => (
  <ActionButton
    text="Delete"
    iconUrl={deleteIconUrl}
    color="var(--color-primary-red)"
    activeColor="var(--color-primary-light-red)"
    {...props}
  />
);
