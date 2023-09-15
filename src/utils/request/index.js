import HttpRequest from './http';
import { merge } from 'lodash-es';
import { getToken } from '../auth';
import { RequestCodeEnum, RequestMethodsEnum } from '@/enums/requestEnums';
import { useUserStore } from '@/stores/user'
import { useMessage } from '../message';


const message = useMessage();

const requestHooks = {
    requestInterceptorsHook(options, config) {
        const { urlPrefix, baseUrl, withToken, isAuth } = config;
        options.header = options.header ?? {};
        if (urlPrefix) {
            options.url = `${urlPrefix}${options.url}`;
        }
        if (baseUrl) {
            options.url = `${baseUrl}${options.url}`;
        }
        const token = getToken();
        if (withToken && !options.header.token) {
            options.header.token = token;
        }
        return options;
    },
    responseInterceptorsHook(response, config) {
        const { isTransformResponse, isReturnDefaultResponse, isAuth } = config;

        if (isReturnDefaultResponse) {
            return response;
        }
        if (!isTransformResponse) {
            return response.data;
        }
        const { logout } = useUserStore();
        const { code, data, msg, show } = response.data;
        switch (code) {
            case RequestCodeEnum.SUCCESS:
                msg && show && message.toast(msg);
                return data;
            case RequestCodeEnum.FAILED:
                message.toast(msg);
                return Promise.reject(msg);

            case RequestCodeEnum.TOKEN_INVALID:
                if (isAuth && !getToken()) {
                    uni.navigateTo({
                        url: '/pages/login/login'
                    });
                }
                return Promise.reject();

            default:
                return data;
        }
    },
    responseInterceptorsCatchHook(options, err) {
        if (options.method?.toUpperCase() == RequestMethodsEnum.POST) {
            console.log('🔥请求失败:', err, options);
        }
        return Promise.reject();
    }
};

const defaultOptions = {
    requestOptions: {
        timeout: 10 * 1000,
        header: { version: '1.0.0' }
    },
    baseUrl: `${import.meta.env.VITE_APP_BASE_URL || ''}/`,
    isReturnDefaultResponse: false,
    isTransformResponse: true,
    urlPrefix: '',
    ignoreCancel: false,
    withToken: true,
    isAuth: false,
    retryCount: 2,
    retryTimeout: 300,
    requestHooks: requestHooks
};

function createRequest(opt) {
    return new HttpRequest(
        merge(defaultOptions, opt || {})
    );
}
const request = createRequest();
export default request;