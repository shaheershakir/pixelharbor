import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

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
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info("next app prepared");

    app.listen(PORT, async () => {
      payload.logger.info(`Next app URL: $(process.env.NEXT_PUBLIC_APP_URL)`);
    });
  });
};

start();
