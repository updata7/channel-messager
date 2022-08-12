/*
 * @Author: CKJiang 
 * @Date: 2022-08-12 10:47:39 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-12 15:43:29
 */


import Koa from 'koa'
import Config from './config'
const getSwagger = require('swagger')

export function start() {
    const app = new Koa()

    const port = Config.get('port')
    const server = app.listen(port, () => {
        console.info(`
            Server is running!
            Local:   http://localhost:${port}
        `)
    })
}