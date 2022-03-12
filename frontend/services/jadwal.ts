import { gql } from "@apollo/client";
import moment from "moment-timezone";
import { Events } from "types/jadwal";
import client from "utils/apollo-client";

export const getJadwal = async () => {
  const { data } = await client.query<Events>({
    query: gql`
      {
        events {
          id
          namaKegiatan
          thumbnail {
            id
            publicUrl
          }
          waktuAwalAcara
          waktuAkhirAcara
          tags {
            name
          }
          jenisKegiatan
          shortDescription
          longDescription {
            document
          }
          isHighlighted
        }
      }
    `,
  });

  return data.events;
};

export const getHighlightedJadwal = async () => {
  const now = moment().tz("Asia/Jakarta").format();

  const { data } = await client.query<Events>({
    query: gql`
      {
        events(where: { isHighlighted: { equals: true }, waktuAkhirAcara: {gte: "${now}"} }, orderBy: {waktuAwalAcara: asc}) {
          id
          namaKegiatan
          thumbnail {
            id
            publicUrl
          }
          waktuAwalAcara
          waktuAkhirAcara
          tags {
            name
          }
          jenisKegiatan
          shortDescription
          longDescription {
            document
          }
          isHighlighted
        }
      }
    `,
  });

  return data.events;
};
