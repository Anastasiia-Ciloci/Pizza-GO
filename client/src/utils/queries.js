import { gql } from "@apollo/client";
export const QUERY_PIZZAS = gql`
  query pizzas {
    pizzas {
      name
      price
      description
      _id
      image
    }
  }
`;
