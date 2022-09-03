import {RequestConfig} from "@@/plugin-request/request";


export const request: RequestConfig = {
    timeout: 10000,
    errorConfig: {
        errorHandler(){},
        errorThrower(){}
    },
    baseURL: 'https://itbug.shop'
}