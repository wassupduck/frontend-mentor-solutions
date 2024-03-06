export enum Vote {
  UP = "UP",
  DOWN = "DOWN",
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies: ReplyComment[];
  currentUserVote: Vote | null;
}

export interface ReplyComment extends Omit<Comment, "replies"> {
  replyingTo: string;
}
