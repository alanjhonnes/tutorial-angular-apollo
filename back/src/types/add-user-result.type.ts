import {
    GraphQLObjectType,
    GraphQLUnionTypeConfig,
    GraphQLUnionType,
    GraphQLObjectTypeConfig, GraphQLNonNull, GraphQLString, GraphQLID
} from "graphql";
import { User } from "../db";
import { errorType } from "./error.type";

export type AddUserResult = AddUserError | AddUserSuccess;

export type AddUserSuccess = User;
export type AddUserError = string;

const config: GraphQLUnionTypeConfig<any, any> = {
    name: "AddUserUnion",
    types: () => [
        errorType,
        userType,
    ],
    resolveType: (obj) => {
        if (typeof obj === 'string') {
            return errorType;
        }
        return userType;
    }
}

export const userType = new GraphQLUnionType(config);
