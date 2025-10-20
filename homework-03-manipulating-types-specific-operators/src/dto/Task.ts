import { STATUSES, PRIORITIES } from '../constants';

export type Status = (typeof STATUSES)[number];
export type Priority = (typeof PRIORITIES)[number];

export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string | Date;
  status?: Status;
  priority?: Priority;
  deadline: string | Date;
};
