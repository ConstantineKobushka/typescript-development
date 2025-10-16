import Joi from 'joi';

export const taskSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().allow('').required(),
  createdAt: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
  status: Joi.string().valid('todo', 'in_progress', 'done').required(),
  priority: Joi.string().valid('low', 'medium', 'high').required(),
  deadline: Joi.string()
    .pattern(/^\d{4}-\d{2}-\d{2}$/)
    .required(),
});
