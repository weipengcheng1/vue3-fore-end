/**
 * 环境编辑配置
 */

//获取当前环境变量
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    dev: {
        baseApi: "/",
        mockApi: "https://www.fastmock.site/mock/dbe0b756cb57d12d34153fed92f3518d/api"
    },
    test: {
        baseApi: "/",
        mockApi: "https://www.fastmock.site/mock/dbe0b756cb57d12d34153fed92f3518d/api"
    },
    prod: {
        baseApi: "/",
        mockApi: ""
    }
}

export default {
    //环境
    env: env,
    mock: true,
    namespace:"manager",
    ...EnvConfig[env]
}