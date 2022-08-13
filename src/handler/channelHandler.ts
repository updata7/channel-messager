/*
 * @Author: CKJiang 
 * @Date: 2022-08-12 16:17:21 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 16:30:17
 */

import channelEngine from "../engine/channelEngine";
import { Context } from "koa";
import { assert, CODES, HTTP_STATUS } from "../utils/error"

class ChannelHandler {
    async create(ctx: Context){
        const { name } = ctx.request.body
        console.debug('ChannelHandler create ===> ', name)
        const isExists = await channelEngine.exists(name)
        if (isExists) {
            ctx.body = { success: false, message: `channel(${name})已存在` }
            return
        }
        const id = await channelEngine.create({ name })
        
        ctx.body = { success: true, id }
    }
}

export default new ChannelHandler();