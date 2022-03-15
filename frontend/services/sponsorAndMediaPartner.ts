import { gql } from "@apollo/client";
import { SponsorsAndMediaPartners } from "types/sponsorAndMediaPartner";
import client from "utils/apollo-client";

export const getAllSponsorAndMediaPartners = async () => {
  const { data } = await client.query<SponsorsAndMediaPartners>({
    query: gql`
      {
        sponsors {
          name
          logo {
            id
            publicUrl
          }
        }
        mediaPartners {
          name
          logo {
            id
            publicUrl
          }
        }
      }
    `,
  });

  return data;
};
