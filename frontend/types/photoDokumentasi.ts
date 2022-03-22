import { Photo } from "./photo";

export type PhotoDokumentasi = {
  id: string;
  caption: string;
  photo: Photo;
};

export type PhotoDokumentasis = {
  photoDokumentasis: PhotoDokumentasi[];
};
