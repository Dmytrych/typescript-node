import { Logger } from 'pino'
import { UserManager } from './managers'

export interface ServiceContainer {
  logger: Logger
  repositories: {
  }
  managers: {
  }
}

export function createContainer(logger: Logger): ServiceContainer {

  return {
    logger,
    repositories: {

    },
    managers: {
    }
  }
}
