import { TaskService } from './task.service';
import { Task, Bug, Story, Subtask, Epic } from './task.types';

export class TaskController {
  private service: TaskService;

  constructor(service: TaskService) {
    this.service = service;
  }

  createTask(data: any): void {
    try {
      const task = new Task(data);
      this.service.create(task);
      console.log('Task created:', task.getTaskInfo());
    } catch (error) {
      console.error('Error creating task:', (error as Error).message);
    }
  }

  createBug(data: any): void {
    const bug = new Bug(data);
    this.service.create(bug);
    console.log('Bug created:', bug.getTaskInfo());
  }

  getAllTasks(): void {
    console.log(this.service.getAll());
  }

  updateTask(data: any): void {
    try {
      const updated = new Task(data);
      this.service.update(updated);
      console.log('Updated:', updated.getTaskInfo());
    } catch (error) {
      console.error('Update error:', (error as Error).message);
    }
  }

  deleteTask(id: string): void {
    this.service.delete(id);
    console.log(`Task with id ${id} deleted`);
  }
}
