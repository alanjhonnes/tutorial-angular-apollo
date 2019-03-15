import { GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLNonNull, GraphQLString } from "graphql";
import { User } from "./db";

const config: GraphQLObjectTypeConfig<User, any> = {
    name: "User",
    fields: () => ({
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => obj.name,
        },
    })
}

export const userType = new GraphQLObjectType(config);
