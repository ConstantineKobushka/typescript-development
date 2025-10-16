import { Task, Status, Priority } from './task.types';
import { DEFAULT_STATUS, DEFAULT_PRIORITY } from '../../constants';

export class TaskService {
  private tasks: Task[] = [];

  setDefaults(task: Task): Task {
    if (!task.status) {
      task.status = DEFAULT_STATUS;
    }
    if (!task.priority) {
      task.priority = DEFAULT_PRIORITY;
    }
    return task;
  }

  getAll(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task | undefined {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      console.error(`Task with id ${id} not found`);
    }
    return task;
  }

  getTaskById(id: string): Task | undefined {
    return this.findById(id);
  }

  create(newTask: Task): Task {
    if (this.tasks.some((task) => task.id === newTask.id)) {
      throw new Error(`Task with id ${newTask.id} already exists`);
    }
    this.tasks.push(this.setDefaults(newTask));
    return newTask;
  }

  update(updatedTask: Task): Task {
    const task = this.findById(updatedTask.id);
    if (task) {
      const taskIndex = this.tasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      this.tasks[taskIndex] = this.setDefaults(updatedTask);
    }
    return updatedTask;
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  // filter(status?: Status, priority?: Priority, createdAt?: Date): Task[] {
  //   return this.tasks.filter((task) => {
  //     const sameDate = createdAt
  //       ? new Date(task.createdAt).setHours(0, 0, 0, 0) ===
  //         new Date(createdAt).setHours(0, 0, 0, 0)
  //       : true;
  //     return (
  //       (!status || task.status === status) &&
  //       (!priority || task.priority === priority) &&
  //       sameDate
  //     );
  //   });
  // }

  filter(
    status?: Status,
    priority?: Priority,
    createdAt?: string | Date
  ): Task[] {
    return this.tasks.filter((task) => {
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

  isTaskCompletedOnTime(id: string): boolean | undefined {
    const task = this.findById(id);

    if (task) {
      console.log('Found task:', task);

      const taskCreatedAt = new Date(task.createdAt).getTime();
      const taskDeadline = new Date(task.deadline).getTime();

      if (task && task.status === 'done') {
        return taskCreatedAt <= taskDeadline;
      } else {
        return taskCreatedAt <= taskDeadline;
      }
    }
  }
}
