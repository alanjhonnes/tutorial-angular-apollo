import { GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";
import { User } from "./db";

const config: GraphQLObjectTypeConfig<User, any> = {
    name: "User",
    fields: () => ({
        id: {
            type: new GraphQLNonNull(GraphQLID),
            resolve: (obj) => obj.id,
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => obj.name,
        },
        idAndName: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => `${obj.id}:${obj.name}`,
        }
    })
}

export const userType = new GraphQLObjectType(config);
