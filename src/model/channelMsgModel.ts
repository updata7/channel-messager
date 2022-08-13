/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 16:22:22 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 16:24:07
 */

import { Schema, Model } from 'mongoose';
import mongoManger from './mongoManger';

export interface IChannelMsg {
    title: string;
    content: string;
    channel: string; // 频道 name
    createdAt?: Date;
}

const schema = new Schema<IChannelMsg, Model<IChannelMsg>>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    channel: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date()}
});

export default mongoManger.addModel("channelMsg", schema);
