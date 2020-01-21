const GROUP_NAME = 'orders';
const Joi = require('joi');

module.exports = [
  {
    method: 'POST',
    path: `/${GROUP_NAME}`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '创建订单',
      validate: {
        // 入参的数据
        // [
        //   { goods_id: 123, count: 1 },  // 1件 id 为 123 的商品
        //   { goods_id: 124, count: 2 },  // 2件 id 为 124 的商品
        // ]
        payload: {
          goodsList: Joi.array().items(
            Joi.object().keys({
              goods_id: Joi.number().integer(),
              count: Joi.number().integer(),
            })
          )
        }
      }
    },
  },
  {
    method: 'POST',
    path: `/${GROUP_NAME}/{orderId}/pay`,
    handler: async (request, reply) => {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '支付某条订单',
      validate: {
        params: {
          orderId: Joi.string().required(),
        }
      }
    },
  },
];