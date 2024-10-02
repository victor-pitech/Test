import { tasks } from './tasks/tasks'
import { projects } from './projects/projects'
import { user } from './users/users'
import { user } from './users/users'
import { message } from './messages/messages'
import { user } from './users/users'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(tasks)
  app.configure(projects)
  app.configure(user)
  app.configure(user)
  app.configure(message)
  app.configure(user)
  // All services will be registered here
}
