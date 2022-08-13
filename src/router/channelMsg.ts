/*
 * @Author: CKJiang 
 * @Date: 2022-08-13 16:25:08 
 * @Last Modified by: CkJiang
 * @Last Modified time: 2022-08-13 16:46:28
 */

import Joi from 'joi'
import channelMsgHandler from '../handler/channelMsgHandler'
import { mongoIdSchema, cudResultSchema, pagingSchema } from './schema'
export default [
    {
        meta: {
            swagger: {
                summary: '新建 new',
                description: '',
                tags: ['channel message']
            }
        },
        path: '/channelMsg/create',
        method: 'POST',
        validate: {
            body: Joi.object({
                title: Joi.string().trim().required().description('标题').default("title_test"),
                content: Joi.string().trim().required().description('内容').default("content_test"),
                channel: Joi.string().trim().required().description('频道名称').default("test"),
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
                    then: Joi.required().description('当 success 为 true 时 返回channelMsg id').example('channelMsg id'),
                    otherwise: Joi.optional()
                }),
            }
        },
        handler: channelMsgHandler.create
    },
    {
        meta: {
            swagger: {
                summary: '获取channel message 列表',
                description: '',
                tags: ['channel message']
            }
        },
        path: '/channelMsg/search',
        method: 'GET',
        // auth: true,
        validate: {
            query: Joi.object({
                channel: Joi.string().description('频道名称'),
            }).keys(pagingSchema.request),
            output: {
                records: Joi.array(),
                totalCount: Joi.number().description('总数')
            }
        },
        handler: channelMsgHandler.search
      }
]