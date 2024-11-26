import mongoose, { RootFilterQuery } from "mongoose"
import { updateProfile, user, userPaginatoin, userPaginator } from "../types/user.type"
import { IUserDocument } from "../interfaces/user.interface"
import { QueryHelper } from "../helpers/query.helper"

export const UserService = {
    get: function (pagintion: userPaginatoin, user_id: string): Promise<userPaginator> {
        let filter: RootFilterQuery<IUserDocument> = {
            _id: { $nin: new mongoose.Types.ObjectId(user_id) },
            $and: QueryHelper.parseUserQuery(pagintion)
        }
        //to be continiue,
        throw new Error("Not implemented")
    },
    getByuserName: function (username: string): Promise<user> {
        throw new Error("Not implemented")
    },
    updateProfile: function (newProfile: updateProfile, user_id: string): Promise<user> {
        throw new Error("Not implemented")
    }
}
