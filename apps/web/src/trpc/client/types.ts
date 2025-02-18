import type { PollStatus, User, VoteType } from "@rallly/database";

export type GetPollApiResponse = {
  id: string;
  title: string;
  location: string | null;
  description: string | null;
  options: { id: string; startTime: Date; duration: number }[];
  user: User | null;
  timeZone: string | null;
  adminUrlId: string;
  status: PollStatus;
  participantUrlId: string;
  closed: boolean;
  createdAt: Date;
  deleted: boolean;
};

export type Vote = {
  optionId: string;
  type: VoteType;
};
