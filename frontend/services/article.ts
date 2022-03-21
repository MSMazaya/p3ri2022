import { gql } from "@apollo/client";
import { Article, ArticleIds, Articles } from "types/article";
import client from "utils/apollo-client";

export const getAllArticlesId = async () => {
  const { data } = await client.query<ArticleIds>({
    query: gql`
      {
        articles(orderBy: { publishedAt: asc }) {
          id
        }
      }
    `,
  });

  return data.articles;
};

export const getArticleById = async (id: string) => {
  const { data } = await client.query<{ article: Article }>({
    query: gql`
      {
        article(where: { id: "${id}" }) {
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

  return data.article;
};

export const getArticlesPaginated = async (take: number, skip: number) => {
  const { data } = await client.query<Articles>({
    query: gql`
      {
        articles(take: ${take}, skip: ${skip}, orderBy: { publishedAt: asc }) {
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
