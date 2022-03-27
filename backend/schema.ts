import { list } from "@keystone-6/core";

import {
  text,
  relationship,
  password,
  timestamp,
  select,
  checkbox,
  integer,
} from "@keystone-6/core/fields";
import axios from "axios";

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
    hooks: {
      afterOperation: async () => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: "/merch",
            secret,
          },
        });
      },
    },
  }),

  Faq: list({
    fields: {
      question: text(),
      answer: text(),
    },
    hooks: {
      afterOperation: async () => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
      },
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
    hooks: {
      afterOperation: async () => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: "/jadwal",
            secret,
          },
        });
      },
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

  Program: list({
    fields: {
      namaProgram: text(),
      deskripsiProgram: document({
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
      thumbnail: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
      articles: relationship({
        ref: "Article",
        many: true,
      }),
      timelines: relationship({
        ref: "Event",
        many: true,
      }),
    },
    hooks: {
      afterOperation: async ({ item }) => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: "/program",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: `/program/${item!.id}`,
            secret,
          },
        });
      },
    },
  }),

  Article: list({
    fields: {
      title: text(),
      content: document({
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
      thumbnail: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
      author: text(),
      authorPhoto: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
      publishedAt: timestamp(),
      minutesToRead: integer(),
    },
    hooks: {
      afterOperation: async () => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: "/sponsor",
            secret,
          },
        });
      },
    },
  }),

  photoDokumentasi: list({
    fields: {
      photo: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
      caption: text(),
    },
    hooks: {
      afterOperation: async () => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: "/sponsor",
            secret,
          },
        });
      },
    },
  }),

  sponsor: list({
    fields: {
      name: text(),
      logo: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
    },
    hooks: {
      afterOperation: async () => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: "/sponsor",
            secret,
          },
        });
      },
    },
  }),

  mediaPartner: list({
    fields: {
      name: text(),
      logo: cloudinaryImage({
        cloudinary: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME as string,
          apiKey: process.env.CLOUDINARY_API_KEY as string,
          apiSecret: process.env.CLOUDINARY_API_SECRET as string,
          folder: process.env.CLOUDINARY_API_FOLDER,
        },
      }),
    },
    hooks: {
      afterOperation: async () => {
        const validateUrl = process.env.VALIDATE_URL as string;
        const secret = process.env.SECRET_REVALIDATE_TOKEN;
        await axios.get(validateUrl, {
          params: {
            path: "/",
            secret,
          },
        });
        await axios.get(validateUrl, {
          params: {
            path: "/sponsor",
            secret,
          },
        });
      },
    },
  }),
};
