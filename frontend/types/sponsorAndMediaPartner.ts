import { Photo } from "./photo";

export type Sponsor = {
  name: string;
  logo: Photo;
};

export type MediaPartner = {
  name: string;
  logo: Photo;
};

export type SponsorsAndMediaPartners = {
  sponsors: Sponsor[];
  mediaPartners: MediaPartner[];
};
