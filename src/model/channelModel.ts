/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 12:33:23 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 17:17:08
 */

import mongoose, { Schema, Model } from 'mongoose';
import { BaseModel } from './baseModel';
import mongoManger from './mongoManger';

export interface IChannel {
    name: string;
    createdAt?: Date;
}

const schema = new Schema<IChannel, Model<IChannel>>({
    name: { type: String, required: true, unique: true },
    createdAt: { type: Date, required: true, default: new Date()}
});

/**
 * 统一封装可使用
 */
/**
class ChannelModel extends BaseModel {
    constructor() {
        super("channel", schema);
    }
}

export default new ChannelModel()
*/

// mongoose.model<IChannel>('channel', schema);
export default mongoManger.addModel("channel", schema);
