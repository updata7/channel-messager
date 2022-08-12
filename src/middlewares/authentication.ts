/*
 * @Author: CKJiang 
 * @Date: 2022-08-12 16:07:10 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-12 16:21:35
 */

import { pathToRegexp } from 'path-to-regexp'
import Config from 'config'
import userHandler from '../handler/userHandler'
import { Context, Next } from 'koa'

export function getAuthentication(routers: any) {
    const methodPathRegexps: Array<RegExp> = []
    const { routes = [] } = routers
    const methodPathRegexpAuthMap = new Map()

    routes.forEach((item: any) => {
        const methodPath: string = (`${Config.get('apiPrefix')}${item.path}:${item.method}`).toLowerCase()
        let methodPathRegexp: RegExp = pathToRegexp(methodPath)
        methodPathRegexps.push(methodPathRegexp)
        methodPathRegexpAuthMap.set(methodPath, item.auth)
    })

    return async (ctx: Context, next: Next) => {
        const methodPath = (`${ctx.path}:${ctx.request.method}`).toLowerCase()
        const methodPathRegexp = methodPathRegexps.filter(item => item.test(methodPath))[0]
        const needAuth = methodPathRegexpAuthMap.get(methodPathRegexp)
        if (needAuth) {
            const { 'access-token': token } = ctx.request.header
            ctx.assert(token, 401, '授权字段为空')
            ctx.state.user = await userHandler.authVerifyToken(token)
        }
        
        // 数据可以在此做统一的解密
        await next()
    }
}