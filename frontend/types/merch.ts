import { CmsDocument } from "./cmsDocument";
import { Photo } from "./photo";

export type Merch = {
  id: string;
  name: string;
  productUrl: string;
  description: {
    document: CmsDocument[];
  };
  photo: Photo;
};

export type Merches = {
  merches: Merch[];
};
