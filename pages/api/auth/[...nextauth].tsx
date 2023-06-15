import NextAuth, { NextAuthOptions } from "next-auth";
import GmailProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../utils/MongoDBClient";
import Credentials from "next-auth/providers/credentials";
import { IUser } from "@/types";
import { connectToMongoDB } from "@/utils/mongodb";
import User from "@/models/User";
import { compare } from "bcryptjs";

export default NextAuth({
  providers: [
    GmailProvider({
      clientId: `${process.env.GOGOLE_AUTH_ID}`,
      clientSecret: `${process.env.GOOGLE_AUTH_SECRET}`,
    }),
    Credentials({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToMongoDB().catch((err) => {
          throw new Error(err);
        });

        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) {
          throw new Error("Invalid Credentials");
        }

        const isPasswordCorrect = await compare(
          credentials!.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid Credentials");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/index",
  },
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "asdadeegkdjao",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      const user = token.user as IUser;
      session.user = user;
      return session;
    },
  },
});
