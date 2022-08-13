/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 10:06:20 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 16:38:14
 */

import channelModel, { IChannel } from "../model/channelModel";


class ChannelEngine {
    async create(doc: IChannel): Promise<string> {
        const res = await channelModel.create(doc)
        return res.id
    }

    /**
     * 
     * @param name 频道名
     * @returns true 表示已存在
     */
    async exists(name: string): Promise<boolean> {
        const res = await channelModel.findOne({ name })
        if (res) {
            return true
        }
        return false
    }
}

export default new ChannelEngine(); 