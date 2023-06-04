import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

export function getClient(username: string) {
    return getSdk(new GraphQLClient("/api/graphql", {
        headers: {
            Authorization: username
        }
    }));
}