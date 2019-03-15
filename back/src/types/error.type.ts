import { GraphQLObjectType, GraphQLObjectTypeConfig, GraphQLNonNull, GraphQLString, GraphQLID } from "graphql";

const config: GraphQLObjectTypeConfig<{ message: string }, any> = {
    name: "Error",
    fields: () => ({
        message: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (obj) => obj.message,
        }
    })
}

export const errorType = new GraphQLObjectType(config);
