/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 16:27:07 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 17:00:53
 */

import channelMsgEngine from "../engine/channelMsgEngine";
import { Context } from "koa";
import { assert, CODES, HTTP_STATUS } from "../utils/error"
import channelEngine from "../engine/channelEngine";

class ChannelMsgHandler {
    async create(ctx: Context){
        const { title, content, channel } = ctx.request.body
        console.debug('ChannelMsgHandler create ===> ', title, content, channel)
        const isExistChannel = await channelEngine.exists(channel)
        if (!isExistChannel) {
            ctx.body = { success: false, message: `channel(${channel}) 不存在` }
            return
        }
        
        const id = await channelMsgEngine.create({ title, content, channel })
        ctx.body = { success: true, id }
    }

    async search(ctx: Context) {
        const { channel, isLoadAll, pageNo: page, pageSize: limit, 
            sortField, sortOrder } = ctx.request.query
        const query = { channel }
        const options = { isLoadAll, page, limit, sortField, sortOrder}
        const { records, totalCount } = await channelMsgEngine.search(query, options)
        ctx.body = { records, totalCount}
    }
}

export default new ChannelMsgHandler();