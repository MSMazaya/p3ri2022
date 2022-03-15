import { gql } from "@apollo/client";
import { Articles } from "types/article";
import client from "utils/apollo-client";

export const getArticlesPaginated = async (take: number, skip: number) => {
  const { data } = await client.query<Articles>({
    query: gql`
      {
        articles(take: ${take}, skip: ${skip}, orderBy: { publishedAt: desc }) {
          id
          title
          content {
            document
          }
          thumbnail {
            id
            publicUrl
          }
          author
          authorPhoto {
            id
            publicUrl
          }
          publishedAt
          minutesToRead
        }
      }
    `,
  });

  return data.articles;
};
