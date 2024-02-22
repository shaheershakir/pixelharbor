import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/intex";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
});

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        // This is where you can add your own custom express middleware
        // app.use(myCustomMiddleware);
        cms.logger.info(`ADMIN_URL: ${cms.getAdminURL}`);
      },
    },
  });

  app.use(
    "/api/trpc",
    trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
  );
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    // payload.logger.info("next app prepared");

    app.listen(PORT, async () => {
      // payload.logger.info(`Next app URL: $(process.env.NEXT_PUBLIC_APP_URL)`);
    });
  });
};

start();
