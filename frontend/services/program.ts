import { gql } from "@apollo/client";
import { Programs } from "types/program";
import client from "utils/apollo-client";

export const getAllPrograms = async () => {
  const { data } = await client.query<Programs>({
    query: gql`
      {
        programs {
          id
          namaProgram
          deskripsiProgram {
            document
          }
          thumbnail {
            id
            publicUrl
          }
          articles {
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
          timelines {
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
      }
    `,
  });

  return data.programs;
};

export const getProgramById = async (id: string) => {
  const { data } = await client.query<{ program: Programs }>({
    query: gql`
		{
			program(where: { id: "${id}" }) {
				id
				namaProgram
				deskripsiProgram {
					document
				}
				thumbnail {
					id
					publicUrl
				}
				articles {
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
			timelines {
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
		}
	`,
  });

  return data.program;
};
