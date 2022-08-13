/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 12:33:23 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 16:24:28
 */

import mongoose, { Schema, Model } from 'mongoose';
import mongoManger from './mongoManger';

export interface IChannel {
    name: string;
    createdAt?: Date;
}

const schema = new Schema<IChannel, Model<IChannel>>({
    name: { type: String, required: true, unique: true },
    createdAt: { type: Date, required: true, default: new Date()}
});



// mongoose.model<IChannel>('channel', schema);
export default mongoManger.addModel("channel", schema);
