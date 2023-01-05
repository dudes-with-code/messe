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
    .query(({ ctx }) => {
      let date = new Date()
      let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1)
      let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)
      return ctx.prisma.userData.findMany({
        where: {
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        },
      });

    }),
  getAllUsers: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.userData.findMany({
        include: {
          company: true,
          interests: true
        }
      })
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
  }),
  getNumberOfWebDevInterested: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.interests.groupBy({
      by: ["webDevelopment"],
      where: {
        webDevelopment: {
          equals: true
        }
      },
      _count: {
        userID: true
      }
    })
  }),
  getNumberOfCyberSecurityInterested: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.interests.groupBy({
      by: ["cyberSecurity"],
      where: {
        cyberSecurity: {
          equals: true
        }
      },
      _count: {
        userID: true
      }
    })
  }),
  getNumberOfMobileDevInterested: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.interests.groupBy({
      by: ["mobileDev"],
      where: {
        mobileDev: {
          equals: true
        }
      },
      _count: {
        userID: true
      }
    })
  }),
  getNumberOfDesignInterested: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.interests.groupBy({
      by: ["design"],
      where: {
        design: {
          equals: true
        }
      },
      _count: {
        userID: true
      }
    })
  }),
  getNumberOfDataScienceInterested: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.interests.groupBy({
      by: ["dataScience"],
      where: {
        dataScience: {
          equals: true
        }
      },
      _count: {
        userID: true
      }
    })
  }),
  getNumberOfWebDevInterestedToday: publicProcedure.query(({ ctx }) => {
    let date = new Date()
    let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        interests: {
          webDevelopment: {
            equals: true
          }
        },
        AND: [{
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        }]

      },
    })
  }),
  getNumberOfCyberSecurityInterestedToday: publicProcedure.query(({ ctx }) => {
    let date = new Date()
    let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        interests: {
          cyberSecurity: {
            equals: true
          }
        },
        AND: [{
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        }]

      },
    })
  }),
  getNumberOfMobileDevInterestedToday: publicProcedure.query(({ ctx }) => {
    let date = new Date()
    let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        interests: {
          mobileDev: {
            equals: true
          }
        },
        AND: [{
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        }]

      },
    })
  }),
  getNumberOfDesignInterestedToday: publicProcedure.query(({ ctx }) => {
    let date = new Date()
    let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        interests: {
          design: {
            equals: true
          }
        },
        AND: [{
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        }]

      },
    })
  }),

  getNumberOfDataScienceInterestedToday: publicProcedure.query(({ ctx }) => {
    let date = new Date()
    let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        interests: {
          dataScience: {
            equals: true
          }
        },
        AND: [{
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        }]

      },
    })
  }),


  getNumberOfCodingInterestedToday: publicProcedure.query(({ ctx }) => {
    let date = new Date()
    let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        interests: {
          coding: {
            equals: true
          }
        },
        AND: [{
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        }]

      },
    })
  }),
  getNumberOfCompanyAssociatedToday: publicProcedure.query(({ ctx }) => {
    let date = new Date()
    let yesterday = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate())
    let tomorrow = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() + 1)

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        company: {
          isAssociated: {
            equals: true
          }
        },
        AND: [{
          createdAt: {
            lt: new Date(tomorrow),
            gt: new Date(yesterday),
          },
        }]

      },
    })

  }),
  getNumberOfCompanyAssociated: publicProcedure.query(({ ctx }) => {

    return ctx.prisma.userData.groupBy({
      by: ["id"],
      where: {
        company: {
          isAssociated: {
            equals: true
          }
        },
      },

    })

  }),
})







