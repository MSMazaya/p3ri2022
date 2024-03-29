import { config } from "@keystone-6/core";

import { lists } from "./schema";

import { withAuth, session } from "./auth";

import dotenv from "dotenv";

dotenv.config();

export default withAuth(
  config({
    db:
      process.env.NODE_ENV === "production"
        ? {
            provider: "postgresql",
            url: process.env.DATABASE_URL as string,
            // onConnect: async (context) => {
            //   /* ... */
            // },
            enableLogging: true,
            useMigrations: true,
            idField: { kind: "uuid" },
          }
        : {
            provider: "sqlite",
            url: "file:./keystone.db",
          },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
