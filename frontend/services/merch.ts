import { gql } from "@apollo/client";
import { Merches } from "types/merch";
import client from "utils/apollo-client";

export const getMerches = async () => {
  const { data } = await client.query<Merches>({
    query: gql`
      {
        merches {
          id
          name
          productUrl
          description {
            document
          }
          photo {
            id
            publicUrl
          }
        }
      }
    `,
  });

  return data.merches;
};
