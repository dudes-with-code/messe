import { router } from "../trpc";
import { authRouter } from "./auth";
import { userRouter } from "./userRouter";

export const appRouter = router({
  newUser: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
