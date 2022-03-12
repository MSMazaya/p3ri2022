import { gql } from "@apollo/client";
import { Merches } from "types/merch";
import client from "utils/apollo-client";

export const getAllMerches = async () => {
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

export const getMerchesPaginated = async (take: number, skip: number) => {
  const { data } = await client.query<Merches>({
    query: gql`
      {
        merches(take: ${take}, skip: ${skip}) {
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
