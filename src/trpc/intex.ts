import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  anyApiRoute: publicProcedure.query(() => {
    return "Hello";
  }),
});

export type appRouter = typeof appRouter;
