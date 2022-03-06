import { list } from "@keystone-6/core";

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
} from "@keystone-6/core/fields";
import { cloudinaryImage } from "@keystone-6/cloudinary";
import { document } from "@keystone-6/fields-document";

import { Lists } from ".keystone/types";
import dotenv from "dotenv";

dotenv.config();

export const lists: Lists = {
  User: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
    },
  }),

  Merch: list({
    fields: {
      name: text(),
      productUrl: text(),

      description: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),

      photo: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
    },
  }),

  Faq: list({
    fields: {
      question: text(),
      answer: text(),
    },
  }),

  Event: list({
    fields: {
      namaKegiatan: text(),
      thumbnail: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
      waktuAwalAcara: timestamp(),
      waktuAkhirAcara: timestamp(),
      tags: relationship({
        ref: "Tag.events",
        many: true,
      }),
      jenisKegiatan: select({
        type: "enum",
        options: [
          { value: "offline", label: "Offline" },
          { value: "online", label: "Online" },
        ],
      }),
      shortDescription: text(),
      longDescription: document({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1],
        ],
        links: true,
        dividers: true,
      }),
      isHighlighted: checkbox(),
    },
  }),

  Tag: list({
    ui: {
      isHidden: true,
      description: "Abaikan dropdown events",
    },
    fields: {
      name: text(),
      events: relationship({
        ref: "Event.tags",
        many: true,
      }),
    },
  }),
};
