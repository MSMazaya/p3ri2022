import { CmsDocument } from "./cmsDocument";
import { Photo } from "./photo";

export type Article = {
  id: string;
  title: string;
  content: {
    document: CmsDocument[];
  };
  thumbnail: Photo;
  author: string;
  authorPhoto: Photo;
  publishedAt: string;
  minutesToRead: number;
};

export type Articles = {
  articles: Article[];
};
