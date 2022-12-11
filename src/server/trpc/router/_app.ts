import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { userRouter } from "./userRouter";

export const appRouter = router({
  example: exampleRouter,
  newUser: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
