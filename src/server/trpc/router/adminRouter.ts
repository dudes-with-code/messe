import { z } from "zod";
import { router, publicProcedure } from "../trpc";

export const adminRouter = router({
  changeSpecificUserData: publicProcedure
    .input(
      z.object({
        mail: z.string(),
        lastName: z.string(),
        firstName: z.string(),
        picture: z.string(),
        interests: z.object({
          webDevelopment: z.boolean(),
          cyberSecurity: z.boolean(),
          mobileDev: z.boolean(),
          design: z.boolean(),
          dataScience: z.boolean(),
          coding: z.boolean(),
        }),
        company: z.object({
          isAssociated: z.boolean(),
          companyEmail: z.string(),
          companyName: z.string(),
        }),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.userData.update({
        where: { mail: input.mail },
        data: {
          mail: input.mail,
          lastName: input.lastName,
          firstName: input.firstName,
          picture: input.picture,
          interests: {
            create: {
              webDevelopment: input.interests.webDevelopment,
              cyberSecurity: input.interests.cyberSecurity,
              mobileDev: input.interests.mobileDev,
              design: input.interests.design,
              dataScience: input.interests.dataScience,
              coding: input.interests.coding,
            },
          },
          company: {
            create: {
              isAssociated: input.company.isAssociated,
              companyEmail: input.company.companyEmail,
              companyName: input.company.companyName,
            },
          },
        },
      });
    }),
  deleteUserByID: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      const deleteInterests = ctx.prisma.interests.delete({
        where: {
          userID: input.id
        }
      })
      const deleteCompanyData = ctx.prisma.companyData.delete({
        where: {
          userID: input.id
        }
      })
      const deleteUser = ctx.prisma.userData.delete({
        where: {
          id: input.id
        }
      })
      return ctx.prisma.$transaction([deleteInterests, deleteCompanyData, deleteUser])
    }),


  getAllUsersFromToday: publicProcedure
    .input(z.object({ tomorrow: z.string(), yesterday: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.userData.findMany({
        where: {
          createdAt: {
            lt: new Date(input.tomorrow),
            gt: new Date(input.yesterday),
          },
        },
      });

    }),
  getAllUsers: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.userData.findMany()
    }),

  getUserByMail: publicProcedure
    .input(z.object({ mail: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.userData.findFirst({ where: { mail: input.mail } });
    }),
  getNumberOfCodingInterested: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.interests.groupBy({
      by: ["coding"],
      where: {
        coding: {
          equals: true
        }
      },
      _count: {
        userID: true
      }
    })
  })

})
