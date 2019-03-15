import { GraphQLSchema } from "graphql";
import { query } from "./query";
import { mutation } from "./mutation";

export const schema: GraphQLSchema = new GraphQLSchema({
    query: query,
    mutation: mutation,
})
