import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task';
import { Update } from '@ngrx/entity';

export const CreateTask = createAction(
  '[Tasks] Create Task',
  props<{ task: Task }>()
);

export const CreatTaskSuccess = createAction(
  '[Tasks] Create Task Succcess',
  props<{ task: Task }>()
);

export const createTaskError = createAction(
  '[Tasks] Create Task Error',
  props<{ error: any }>()
);

export const EditTask = createAction(
  '[Tasks] Edit Task',
  props<{ updates: Update<Task> }>()
);

export const RemoveTask = createAction(
  '[Tasks] Remove Task',
  props<{ taskId: string }>()
);
