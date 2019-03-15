import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } from "graphql";
import { users } from "./db";
import { userType } from "./user.type";

export const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addUser: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                }
            },
            resolve: (obj, args, context) => {
                 users.push({ name: args.name });
                 return users;
            }
        }
    })
})
