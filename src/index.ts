import { Elysia } from "elysia";
import { controllers } from "./controllers";
import { logger } from "./helpers/logger";

const app = new Elysia()
  .get("/", () => {
    return {
      status: {
        code: 200,
        message: "OK",
      },
      data: null,
    };
  })
  .use(controllers);

try {
  app.listen(9102);
  logger.info(`[MAIN] Service is running at http://localhost:9102`);
} catch (error) {
  logger.error("[MAIN] Error starting server", error);
  process.exit(1);
}
