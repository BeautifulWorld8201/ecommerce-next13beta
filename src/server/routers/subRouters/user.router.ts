import { userProcedure } from "../../procedures";
import { router } from "../../trpc";

export const userRouter = router({
  profile: userProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findFirst({
      where: {
        id: ctx.session.user.id,
      },
    });
  }),
});
