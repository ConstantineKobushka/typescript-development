import { Task } from './dto/Task';
import {
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  filterTasks,
  isTaskCompletedOnTime,
} from './utils/taskUtils';

import tasksData from './tasks.json';

const tasks: Task[] = tasksData as Task[];

// Отримання завдання за ID
console.log('----------- Task by ID 1: -----------');
console.log(getTaskById(tasks, 1));

// Створення нового завдання
const newTask: Task = {
  id: 11,
  title: 'New Task',
  description: 'This is a new task',
  createdAt: '2025-10-06',
  status: 'todo',
  priority: 'medium',
  deadline: '2025-10-12',
};

console.log('----------- Tasks after creating new task: -----------');
console.log(createTask(tasks, newTask));

// Оновлення існуючого завдання
const updatedTask: Task = {
  id: 11,
  title: 'Updated Task',
  description: 'This task was updated',
  createdAt: '2025-10-06',
  status: 'in_progress',
  priority: 'high',
  deadline: '2025-10-14',
};

console.log('----------- Tasks after update last task: -----------');
console.log(updateTask(tasks, updatedTask));

// Видалення завдання за ID
console.log('----------- Tasks after deletion last task: -----------');
console.log(deleteTask(tasks, 11));

// Фільтрація завдань за статусом, пріоритетом та датою створення
console.log('----------- tasks with priority "high": -----------');
console.log(filterTasks(tasks, undefined, 'high'));
console.log('----------- Tasks with status "in_progress": -----------');
console.log(filterTasks(tasks, 'in_progress', undefined));
console.log('----------- Tasks created on "2025-09-15": -----------');
console.log(filterTasks(tasks, undefined, undefined, '2025-09-15'));

// Перевірка, чи завдання виконане вчасно
console.log('----------- Is task completed on time? -----------');
console.log(isTaskCompletedOnTime(tasks, 1));
console.log(isTaskCompletedOnTime(tasks, 2));
console.log(isTaskCompletedOnTime(tasks, 3));
console.log(isTaskCompletedOnTime(tasks, 4));
console.log(isTaskCompletedOnTime(tasks, 5));
console.log(isTaskCompletedOnTime(tasks, 6));
console.log(isTaskCompletedOnTime(tasks, 7));
console.log(isTaskCompletedOnTime(tasks, 8));
console.log(isTaskCompletedOnTime(tasks, 9));
console.log(isTaskCompletedOnTime(tasks, 10));
console.log(isTaskCompletedOnTime(tasks, 11));
console.log(isTaskCompletedOnTime(tasks, 12));
