import { STATUSES, PRIORITIES } from '../../constants';

export type Status = (typeof STATUSES)[number];
export type Priority = (typeof PRIORITIES)[number];

export class Task {
  id: string;
  title: string;
  description: string;
  createdAt: string | Date;
  status?: Status;
  priority?: Priority;
  deadline: string | Date;

  constructor({
    id,
    title,
    description,
    createdAt,
    status = 'todo',
    priority = 'low',
    deadline,
  }: {
    id: string;
    title: string;
    description: string;
    createdAt: string | Date;
    status?: Status;
    priority?: Priority;
    deadline: string | Date;
  }) {
    if (!title.trim()) throw new Error('Title cannot be empty');
    if (!description.trim()) throw new Error('Description cannot be empty');
    if (new Date(deadline).getTime() < new Date(createdAt).getTime()) {
      throw new Error('Deadline cannot be earlier than creation date');
    }

    this.id = id;
    this.title = title;
    this.description = description;
    this.createdAt = new Date(createdAt);
    this.status = status;
    this.priority = priority;
    this.deadline = new Date(deadline);
  }

  getTaskInfo(): string {
    return `Task id:${this.id}
Status: ${this.status}
Priority: ${this.priority}
CreatedAt: ${this.createdAt}
Deadline: ${this.deadline}
    `;
  }
}

export class Subtask extends Task {
  parentId: string;

  constructor(
    params: ConstructorParameters<typeof Task>[0] & {
      parentId: string;
    }
  ) {
    super(params);
    this.parentId = params.parentId;
  }

  getTaskInfo(): string {
    return `Subtask of #${this.parentId}: ${this.title}`;
  }
}

export class Bug extends Task {
  severity: 'minor' | 'major' | 'critical';

  constructor(
    params: ConstructorParameters<typeof Task>[0] & {
      severity: 'minor' | 'major' | 'critical';
    }
  ) {
    super(params);
    this.severity = params.severity;
  }

  getTaskInfo(): string {
    return `🐞 Bug [${this.severity.toUpperCase()}]: ${this.title}`;
  }
}

export class Story extends Task {
  userStory: string;

  constructor(
    params: ConstructorParameters<typeof Task>[0] & { userStory: string }
  ) {
    super(params);
    this.userStory = params.userStory;
  }

  getTaskInfo(): string {
    return `Story: ${this.title} (${this.userStory})`;
  }
}

export class Epic extends Task {
  relatedStories: string[];

  constructor(
    params: ConstructorParameters<typeof Task>[0] & { relatedStories: string[] }
  ) {
    super(params);
    this.relatedStories = params.relatedStories;
  }

  getTaskInfo(): string {
    return `Epic: ${this.title}, includes stories: ${this.relatedStories.join(
      ', '
    )}`;
  }
}
