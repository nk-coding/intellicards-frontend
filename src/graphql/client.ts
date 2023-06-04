import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated";

export function getClient(username: string) {
    return getSdk(new GraphQLClient("http://kkohlen.me:9090/graphql", {
        headers: {
            Authorization: username
        }
    }));
}