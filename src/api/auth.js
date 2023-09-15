import request from "@/utils/request"

export function login(code, share_uid) {
    return request.post({
        url: '/api/user/login',
        data: {
            code,
            share_uid
        }
    })
}

