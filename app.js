const Hapi = require('hapi');

require('env2')('./.env');
const config = require('./config/index');
const routeHelloConfig = require('./routes/hello-world');
const routeOrderConfig = require('./routes/orders');

// 引入自定义的hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');


// console.log(process.env)

const server = new Hapi.Server();

// 配置服务器启动host与端口
server.connection({
    port: config.port,
    host: config.host,
});

const init = async () => {
    await server.register([
        // 为系统使用hapi-swagger
        ...pluginHapiSwagger,
    ])
    server.route([
        ...routeHelloConfig,
        ...routeOrderConfig,
    ]);

    // 启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

init();