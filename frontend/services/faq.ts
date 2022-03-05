import { gql } from "@apollo/client";
import { Faqs } from "types/faq";
import client from "utils/apollo-client";

export const getFaqs = async () => {
  const { data } = await client.query<Faqs>({
    query: gql`
      {
        faqs {
          id
          question
          answer
        }
      }
    `,
  });

  return data.faqs;
};
