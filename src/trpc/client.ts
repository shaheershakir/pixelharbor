import { createTRPCReact } from "@trpc/react-query";
import { appRouter } from "./intex";

export const trpc = createTRPCReact<appRouter>({});
