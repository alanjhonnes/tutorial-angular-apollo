import { userType } from './user.type';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { users } from "./db";

export const query = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        users: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),
            resolve: (obj, args, context) => {
                return users;
            },
        },
    }),
});
