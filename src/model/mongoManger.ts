import Config from '../config'
import { assert, CODES, HTTP_STATUS } from '../utils/error'
import mongoose, { Connection, Model } from 'mongoose'

const mConfig = Config.get('mongodb')
class MongoManger {
    connect: Connection
    constructor() {
        console.log(`mongoManger constructor ===> ${mConfig.uri}${mConfig.dbname}`)
        mongoose.Promise = global.Promise // http://mongoosejs.com/docs/promises.html
        this.connect = mongoose.createConnection(`${mConfig.uri}${mConfig.dbname}`)
        if (this.connect.readyState) {
            console.log('Connecte success ==> ')
        } else {
            console.log('Connecte failed ==> ')
        }
    }

    addModel(modelName: string, schema: any): Model<any> {
        console.log(`addModel ===> ${modelName}`)
        assert(!(modelName && schema), HTTP_STATUS.InternalServerError, CODES.INTERNAL_SERVER_ERROR,  "modelName and schema cant be null")
        assert(!this.connect, HTTP_STATUS.InternalServerError, CODES.INTERNAL_SERVER_ERROR, "请先连接数据库")
        if (!this.connect.models[modelName]) {
            this.connect.model(modelName, schema)
            console.log(`addModel success: ${modelName}`)
        }

        return this.connect.models[modelName]
    }
}

export default new MongoManger()