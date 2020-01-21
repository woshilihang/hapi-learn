const { env } = process;

// 配置项目中的配置信息
console.log(process.env.HOST, 'haha')
module.exports = {
  port: env.PORT,
  host: env.HOST,
};