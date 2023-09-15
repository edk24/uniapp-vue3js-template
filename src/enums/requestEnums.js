export const ContentTypeEnum = {
    JSON: 'application/json;charset=UTF-8'
};

export const RequestMethodsEnum = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT'
};

export const RequestCodeEnum = {
    SUCCESS: 0, //成功
    FAILED: 1, // 失败
    TOKEN_INVALID: 4001 // TOKEN参数无效
};

export const RequestErrMsgEnum = {
    ABORT: 'request:fail abort',
    TIMEOUT: 'request:fail timeout'
};