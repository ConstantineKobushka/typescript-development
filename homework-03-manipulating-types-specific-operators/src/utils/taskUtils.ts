import { Task, Status, Priority } from '../dto/Task';
import { DEFAULT_STATUS, DEFAULT_PRIORITY } from '../constants';

export function setDefaults(task: Task): Task {
  if (!task.status) {
    task.status = DEFAULT_STATUS;
  }
  if (!task.priority) {
    task.priority = DEFAULT_PRIORITY;
  }
  return task;
}

export function findTaskById(
  tasks: Task[],
  id: string | number
): Task | undefined {
  const task = tasks.find(task => task.id === id);
  if (!task) {
    console.error(`Task with id ${id} not found`);
  }
  return task;
}

export function getTaskById(
  tasks: Task[],
  id: string | number
): Task | undefined {
  return findTaskById(tasks, id);
}

export function createTask(tasks: Task[], newTask: Task): Task[] {
  tasks.push(setDefaults(newTask));
  return tasks;
}

export function updateTask(tasks: Task[], updatedTask: Task): Task[] {
  const task = findTaskById(tasks, updatedTask.id);
  if (task) {
    const taskIndex = tasks.findIndex(t => t.id === updatedTask.id);
    tasks[taskIndex] = setDefaults(updatedTask);
  }
  return tasks;
}

export function deleteTask(tasks: Task[], id: string | number): Task[] {
  return tasks.filter(task => task.id !== id);
}

export function filterTasks(
  tasks: Task[],
  status?: Status,
  priority?: Priority,
  createdAt?: string | Date
): Task[] {
  return tasks.filter(task => {
    const taskCreatedAt = new Date(task.createdAt).setHours(0, 0, 0, 0);
    const filterDate = createdAt
      ? new Date(createdAt).setHours(0, 0, 0, 0)
      : undefined;

    return (
      (!status || task.status === status) &&
      (!priority || task.priority === priority) &&
      (!filterDate || taskCreatedAt === filterDate)
    );
  });
}

export function isTaskCompletedOnTime(
  tasks: Task[],
  id: string | number
): boolean | undefined {
  const task = findTaskById(tasks, id);

  if (task) {
    console.log('Found task:', task);
  }

  if (task && task.status === 'done') {
    const taskCreatedAt = new Date(task.createdAt).getTime();
    const taskDeadline = new Date(task.deadline).getTime();

    return taskCreatedAt <= taskDeadline;
  }

  if (task && task.status !== 'done') {
    const taskCreatedAt = new Date(task.createdAt).getTime();
    const taskDeadline = new Date(task.deadline).getTime();
    const currentDate = new Date().getTime();

    if (currentDate > taskDeadline) {
      return false;
    }

    if (taskCreatedAt <= taskDeadline && currentDate < taskDeadline) {
      console.log(`Завдання маэ статус ${task.status}`);
      return;
    }
  }
}
