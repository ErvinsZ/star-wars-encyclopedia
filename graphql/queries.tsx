// graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
query GET_CHARACTERS{
  allPeople {
    people {
      id
      name
      birthYear
      gender
      homeworld {
        name
      }
      species {
        name
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
}
`;