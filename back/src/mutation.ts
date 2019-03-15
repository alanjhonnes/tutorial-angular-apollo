import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLString } from "graphql";
import { users, User } from "./db";
import { userType } from "./user.type";

export const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addUser: {
            type: new GraphQLNonNull(userType),
            args: {
                name: {
                    type: new GraphQLNonNull(GraphQLString),
                }
            },
            resolve: (obj, args, context) => {
                const user: User = { id: users.length + 1, name: args.name };
                users.push(user);
                return user;
            }
        }
    })
})
