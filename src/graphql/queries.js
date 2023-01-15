/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSalvageAuto = /* GraphQL */ `
  query GetSalvageAuto($id: ID!) {
    getSalvageAuto(id: $id) {
      id
      stock
      year
      make
      model
      mileage
      colour
      transmission
      damage
      imgPath
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listSalvageAutos = /* GraphQL */ `
  query ListSalvageAutos(
    $filter: ModelSalvageAutoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalvageAutos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stock
        year
        make
        model
        mileage
        colour
        transmission
        damage
        imgPath
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
