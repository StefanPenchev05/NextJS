import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "services/app/_lib/db";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (credentials) {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
          if (user) {
              return { id: user.id, name: user.username, email: user.email };
          } else {
            throw new Error("No user found");
          }
        }
      },
    }),
  ],
};
