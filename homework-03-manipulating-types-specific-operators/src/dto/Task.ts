export type Status = 'todo' | 'in_progress' | 'done';

export type Priority = 'low' | 'medium' | 'high';

export type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string | Date;
  status?: Status;
  priority?: Priority;
  deadline: string | Date;
};
