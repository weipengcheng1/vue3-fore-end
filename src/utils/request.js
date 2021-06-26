/**
 * axios 二次封装
 */
//导入依赖项
import axios from "axios";
import config from "./../config";
import {ElMessage} from "element-plus";
import Router from "./../router";

//定义常量
const NETWORK_ERROR = "网络异常，请稍后重试!";

//创建axios实例对象，添加全局配置
const instance = axios.create({
    //请求地址
    baseURL: config.baseApi,
    //超时时间
    timeout: 8000
})

//请求拦截
instance.interceptors.request.use((req) => {
    //TO-DO
    const headers = req.headers;
    if (!headers.Auth) headers.Auth = "xiaoLangTou";
    return req;
})


//响应拦截
instance.interceptors.response.use((res) => {
    const {code, msg, data} = res.data;
    if (code === 0) {
        return Promise.resolve(data)
    } else if (code === 10001) {
        //TO-DO
        ElMessage.error(msg);
        //跳转登录
        setTimeout(() => {
            Router.push({name: "Login"}).then()
        }, 1500);
        return Promise.reject(msg);
    } else {
        ElMessage.error(msg || NETWORK_ERROR);
        return Promise.reject(msg || NETWORK_ERROR)
    }
})


/**
 * 封装请求核心request
 * @param options
 * @returns {AxiosPromise}
 */
function request(options) {
    options.method = options.method || 'GET';
    //根据请求类型转换参数类型
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    //生产环境下。设置baseURL
    if (config.env === 'prod') {
        instance.defaults.baseURL = config.baseApi
    } else {
        instance.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
    }
    return instance(options)
}

//request 请求 request.get
['get', 'post', 'put', 'delete', 'patch'].forEach(item => {
    request[item] = (url, data, options) => {
        return request({
            url,
            method: item,
            data,
            ...options
        })
    }
})
export default request