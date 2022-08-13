import mongoose, { Model } from "mongoose";
import mongoManger from "./mongoManger";

// https://mongoosejs.com/docs/index.html
export class BaseModel {
    mModel: Model<any>
    constructor(modelName: string, schem: any) {
        this.mModel = mongoManger.addModel(modelName, schem);
    }
    findOne() {
        console.log('findOne ===> ')
    }
}