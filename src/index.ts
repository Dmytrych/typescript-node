import pino from "pino";
import { createContainer } from "./container";
import { AppServer, createServer } from "./server";

export async function init() {
  const logger = pino();

  try {
    // Starting the HTTP server
    logger.info("Starting HTTP server");

    const port = Number(process.env.PORT) || 8080;
    const container = createContainer(logger);
    const app = createServer(container);

    app.listen(port);

    // Register global process events and graceful shutdown
    registerProcessEvents(logger, app);

    logger.info(`Application running on port: ${port}`);
  } catch (e) {
    logger.error(e, "An error occurred while initializing application.");
  }
}

function registerProcessEvents(logger: pino.Logger, app: AppServer) {
  process.on("uncaughtException", (error: Error) => {
    logger.error("UncaughtException", error);
  });

  process.on("unhandledRejection", (reason: never, promise: never) => {
    logger.info(reason, promise);
  });

  process.on("SIGTERM", async () => {
    logger.info("Starting graceful shutdown");

    let exitCode = 0;
    const shutdown = [app.closeServer()];

    for (const s of shutdown) {
      try {
        await s;
      } catch (e) {
        logger.error("Error in graceful shutdown ", e);
        exitCode = 1;
      }
    }

    process.exit(exitCode);
  });
}

init();
