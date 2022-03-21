import { CmsDocument } from "./cmsDocument";
import { Photo } from "./photo";
import { Article } from "./article";
import { Event } from "./jadwal";

export type Program = {
  id: string;
  namaProgram: string;
  deskripsiProgram: {
    document: CmsDocument[];
  };
  thumbnail: Photo;
  articles: Article[];
  timelines: Event[];
};

export type Programs = {
  programs: Program[];
};
