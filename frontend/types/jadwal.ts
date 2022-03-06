import { CmsDocument } from "./cmsDocument";

export type Event = {
  id: string;
  namaKegiatan: string;
  thumbnail: {
    id: string;
    publicUrl: string;
  };
  waktuAwalAcara: string;
  waktuAkhirAcara: string;
  tags: {
    name: string;
  }[];
  jenisKegiatan: "online" | "offline";
  shortDescription: string;
  longDescription: {
    document: CmsDocument[];
  };
  isHighlighted: boolean;
};

export type Events = {
  events: Event[];
};
