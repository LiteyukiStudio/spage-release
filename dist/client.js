"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var strings_1 = require("./utils/strings");
var API_SUFFIX = "./api/v1";
var axiosInstance = axios_1.default.create({
    // dev模式使用 localhost:8888/api/v1
    // 生产模式使用 ""，同源请求
    baseURL: API_SUFFIX,
    timeout: 10000,
});
axiosInstance.interceptors.request.use(function (config) {
    if (config.data && typeof config.data === "object") {
        config.data = (0, strings_1.camelToSnakeObj)(config.data);
    }
    if (config.params && typeof config.params === "object") {
        config.params = (0, strings_1.camelToSnakeObj)(config.params);
    }
    return config;
});
axiosInstance.interceptors.response.use(function (response) {
    if (response.data && typeof response.data === "object") {
        response.data = (0, strings_1.snakeToCamelObj)(response.data);
    }
    return response;
}, function (error) { return Promise.reject(error); });
exports.default = axiosInstance;
