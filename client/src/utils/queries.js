import { gql } from '@apollo/client';

export const QUERY_USERS =gql`
query users($username:String!){
    _id
    username
    email
}
`;