import { TaskController } from './modules/tasks/task.controller';
import { TaskService } from './modules/tasks/task.service';

const taskService = new TaskService();
const taskController = new TaskController(taskService);

taskController.createTask({
  id: '11',
  title: 'Learn TypeScript',
  description: 'Study OOP and generics',
  createdAt: '2025-10-10',
  deadline: '2025-10-20',
});

taskController.createBug({
  id: '2',
  title: 'Fix login bug',
  description: 'User can login without password',
  createdAt: '2025-10-12',
  deadline: '2025-10-15',
  severity: 'critical',
});

taskController.getAllTasks();

taskController.updateTask({
  id: '11',
  title: 'Learn TypeScript deeply',
  description: 'Focus on decorators',
  createdAt: '2025-10-10',
  deadline: '2025-10-25',
});

taskController.deleteTask('2');
