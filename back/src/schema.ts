import { GraphQLSchema } from "graphql";
import { query } from "./query";
import { mutation } from "./mutation";
import { userType } from "./user.type";

export const schema: GraphQLSchema = new GraphQLSchema({
    query: query,
    mutation: mutation,
})
