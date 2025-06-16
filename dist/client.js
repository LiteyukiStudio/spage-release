"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const field_conv_1 = require("field-conv");
const API_SUFFIX = "./api/v1";
const axiosInstance = axios_1.default.create({
    // dev模式使用 localhost:8888/api/v1
    // 生产模式使用 ""，同源请求
    baseURL: API_SUFFIX,
    timeout: 10000,
});
axiosInstance.interceptors.request.use((config) => {
    if (config.data && typeof config.data === "object") {
        config.data = (0, field_conv_1.camelToSnakeObj)(config.data);
    }
    if (config.params && typeof config.params === "object") {
        config.params = (0, field_conv_1.camelToSnakeObj)(config.params);
    }
    return config;
});
axiosInstance.interceptors.response.use((response) => {
    if (response.data && typeof response.data === "object") {
        response.data = (0, field_conv_1.snakeToCamelObj)(response.data);
    }
    return response;
}, (error) => Promise.reject(error));
exports.default = axiosInstance;
