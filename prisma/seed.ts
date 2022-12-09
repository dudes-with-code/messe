import { prisma } from "../src/server/db/client";

async function main() {
  await prisma.userData.upsert({
    where: { mail: "test@test.de" },
    update: {},
    create: {
      mail: "test@test.de",
      lastName: "Bayindir",
      firstName: "Pascal",
      interests: {
        create: {
          webDevelopment: true,
          cyberSecurity: true,
          mobileDev: true,
          design: true,
          dataScience: true,
          coding: true,
        },
      },
      picture: "abcd",
      company: {
        create: {
          isAssociated: true,
          companyName: "Bosch",
          companyEmail: "pascal@bosch.com",
        },
      },
    },
  });
  await prisma.userData.upsert({
    where: { mail: "test2@test.de" },
    update: {},
    create: {
      mail: "test2@test.de",
      lastName: "Ihring",
      firstName: "Marius",
      interests: {
        create: {
          webDevelopment: true,
          cyberSecurity: false,
          mobileDev: true,
          design: true,
          dataScience: false,
          coding: true,
        },
      },
      picture: "abcd",
      company: {
        create: {
          isAssociated: true,
          companyName: "Bosch",
          companyEmail: "marius@bosch.com",
        },
      },
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
