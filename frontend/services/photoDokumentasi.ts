import { gql } from "@apollo/client";
import { PhotoDokumentasis } from "types/photoDokumentasi";
import client from "utils/apollo-client";

export const getAllPhotoDokumentasi = async () => {
  const { data } = await client.query<PhotoDokumentasis>({
    query: gql`
      {
        photoDokumentasis {
          id
          caption
          photo {
            id
            publicUrl
          }
        }
      }
    `,
  });

  return data.photoDokumentasis;
};
