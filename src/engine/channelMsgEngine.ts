/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 16:28:00 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 16:58:07
 */

import { removeUndefinedKey } from "../utils/tools";
import channelMsgModel, { IChannelMsg } from "../model/channelMsgModel";

class ChannelEngine {
    async create(doc: IChannelMsg): Promise<string> {
        const res = await channelMsgModel.create(doc)
        return res.id
    }

    async search(query: any, options: any): Promise<any> {
        const { page, limit, sortField, sortOrder, isLoadAll } = options
        let sort
        if (sortField) {
        sort = { [sortField]: sortOrder }
        }
        removeUndefinedKey(query)
        let records
        if (isLoadAll) {
        records = await channelMsgModel.find(query)
        } else {
        records = await channelMsgModel.find(query, null, { sort, limit, skip: (page - 1) * limit })
        }
        const totalCount = await channelMsgModel.countDocuments(query)
        return { records, totalCount }
    }
    async exists(name: string): Promise<boolean> {
        const res = await channelMsgModel.findOne({ name })
        if (res) {
            return true
        }
        return false
    }
}

export default new ChannelEngine(); 