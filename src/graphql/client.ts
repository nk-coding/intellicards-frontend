import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

export function getClient(username: string) {
    return getSdk(new GraphQLClient("http://kkohlen.me/graphql", {
        headers: {
            Authorization: username
        }
    }));
}