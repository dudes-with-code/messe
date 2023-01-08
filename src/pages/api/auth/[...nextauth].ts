import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
// Prisma adapter for NextAuth, optional and can be removed

import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session({ session, user }) {
      if (user) {


        if (session.user) {
          session.user.id = user.id
          session.user.name = user.name
        }
        else {
          alert("alarm")
        }
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        const res = await prisma.admin.findFirst({

          where: {
            name: credentials?.username
          }
        })
        if (!res) {
          return null
        }
        if (credentials?.password != res.password) {
          return null
        }
        return {
          id: res.id,


          name: res.username,



          email: res.email
        }
      }
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
