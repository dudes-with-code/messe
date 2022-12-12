import { router } from "../trpc";
import { authRouter } from "./auth";

import { userRouter } from "./userRouter";

export const appRouter = router({
  userData: userRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
