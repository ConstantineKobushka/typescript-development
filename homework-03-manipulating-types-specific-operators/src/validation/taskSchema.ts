// validation/taskSchema.ts
import Joi from 'joi';
import { STATUSES, PRIORITIES } from '../constants';

export const taskSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow('').required(),
  createdAt: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
  status: Joi.string()
    .valid(...STATUSES)
    .default(STATUSES[0]),
  priority: Joi.string()
    .valid(...PRIORITIES)
    .default(PRIORITIES[0]),
  deadline: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
});

export const tasksArraySchema = Joi.array().items(taskSchema);
