import { router } from "../trpc";
import { adminRouter } from "./adminRouter";
import { authRouter } from "./auth";

import { userRouter } from "./userRouter";

export const appRouter = router({
  userData: userRouter,
  adminRouter: adminRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
