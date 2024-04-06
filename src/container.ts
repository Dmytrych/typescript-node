import { Logger } from "pino";
import { NovaPostApiProvider } from "./lib/nova-post";
import { NovaPostManager } from "./managers";
import { NovaPostRepository } from "./repositories";

export interface ServiceContainer {
  logger: Logger;
  repositories: {
    novaPost: NovaPostRepository;
  };
  managers: {
    novaPost: NovaPostManager;
  };
}

export function createContainer(logger: Logger): ServiceContainer {
  const novaPostRepo = new NovaPostRepository(
    new NovaPostApiProvider(
      "9e444c95f6693d24a27726eac20f9423",
      "https://api.novaposhta.ua/v2.0/json/",
      logger,
    ),
  );

  return {
    logger,
    repositories: {
      novaPost: novaPostRepo,
    },
    managers: {
      novaPost: new NovaPostManager(novaPostRepo),
    },
  };
}
