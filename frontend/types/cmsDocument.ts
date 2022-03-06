export type CmsDocument = {
  type: string;
  children: {
    bold?: boolean;
    text: string;
  }[];
};
