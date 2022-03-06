import { gql } from "@apollo/client";
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
  const { data } = await client.query<Events>({
    query: gql`
      {
        events(isHighlighted: true) {
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
