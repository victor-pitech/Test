// // For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve } from '@feathersjs/schema'
import { Type, getValidator, querySyntax } from '@feathersjs/typebox'
import { ObjectIdSchema } from '@feathersjs/typebox'
import type { Static } from '@feathersjs/typebox'

import type { HookContext } from '../../declarations'
import { dataValidator, queryValidator } from '../../validators'
import type { TasksService } from './tasks.class'

// Main data model schema
export const tasksSchema = Type.Object(
  {
    _id: ObjectIdSchema(),
    text: Type.String()
  },
  { $id: 'Tasks', additionalProperties: false }
)
export type Tasks = Static<typeof tasksSchema>
export const tasksValidator = getValidator(tasksSchema, dataValidator)
export const tasksResolver = resolve<Tasks, HookContext<TasksService>>({})

export const tasksExternalResolver = resolve<Tasks, HookContext<TasksService>>({})

// Schema for creating new entries
export const tasksDataSchema = Type.Pick(tasksSchema, ['text'], {
  $id: 'TasksData'
})
export type TasksData = Static<typeof tasksDataSchema>
export const tasksDataValidator = getValidator(tasksDataSchema, dataValidator)
export const tasksDataResolver = resolve<Tasks, HookContext<TasksService>>({})

// Schema for updating existing entries
export const tasksPatchSchema = Type.Partial(tasksSchema, {
  $id: 'TasksPatch'
})
export type TasksPatch = Static<typeof tasksPatchSchema>
export const tasksPatchValidator = getValidator(tasksPatchSchema, dataValidator)
export const tasksPatchResolver = resolve<Tasks, HookContext<TasksService>>({})

// Schema for allowed query properties
export const tasksQueryProperties = Type.Pick(tasksSchema, ['_id', 'text'])
export const tasksQuerySchema = Type.Intersect(
  [
    querySyntax(tasksQueryProperties),
    // Add additional query properties here
    Type.Object({}, { additionalProperties: false })
  ],
  { additionalProperties: false }
)
export type TasksQuery = Static<typeof tasksQuerySchema>
export const tasksQueryValidator = getValidator(tasksQuerySchema, queryValidator)
export const tasksQueryResolver = resolve<TasksQuery, HookContext<TasksService>>({})
