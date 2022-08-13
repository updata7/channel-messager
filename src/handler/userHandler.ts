/*
 * @Author: CKJiang 
 * @Date: 2022-08-12 16:17:21 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 10:40:47
 */

import userEngine from "engine/channelEngine"
import { assert, CODES, HTTP_STATUS } from "../utils/error"
import { genToken, verifyToken } from "../utils/tools"

class UserHandler {
    async authVerifyToken(token: any): Promise<any> {
        let user_data
        try {
            const { id, account }: {
                id: string, account: string
            } = verifyToken(token)
            assert(!(id && account), HTTP_STATUS.InternalServerError, CODES.INTERNAL_SERVER_ERROR, "无效token")
            // user_data = await userEngine.findOne({ _id: id })
            // return {
            //     id: user_data.id,
            //     account: user_data.account,
            // }
        } catch (err: any) {
            assert(err.name === 'JsonWebTokenError', HTTP_STATUS.Unauthorized, CODES.TOKEN_INVALID, '检验失败')
            assert(err.name === 'TokenExpiredError', HTTP_STATUS.Unauthorized, CODES.TOKEN_EXPIRED, 'token已过期')
            throw err
        }
    }
}

export default new UserHandler();