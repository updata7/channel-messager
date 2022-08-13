/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 10:08:12 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 16:06:23
 */

import Joi from 'joi'
import channelHandler from '../handler/channelHandler'
import { mongoIdSchema, cudResultSchema, pagingSchema } from './schema'
export default [
    {
        meta: {
            swagger: {
                summary: '新建 new',
                description: '',
                tags: ['channel']
            }
        },
        path: '/channel/create',
        method: 'POST',
        validate: {
            body: Joi.object({
                name: Joi.string().trim().required().description('名称'),
            }),
            output: {
                success: Joi.boolean().required().description('是否成功').example(true),
                message: Joi.string().when('success', {
                    is: false,
                    then: Joi.required().description('当 success 为 true 时 message 可选填, false 时 message 为必填').example('错误提示'),
                    otherwise: Joi.optional()
                }),
                id: Joi.string().when('success', {
                    is: true,
                    then: Joi.required().description('当 success 为 true 时 返回channel id').example('channel id'),
                    otherwise: Joi.optional()
                }),
            }
        },
        handler: channelHandler.create
    }
]