/**
 * 验证手机号格式是否正确
 */
export function isPhoneNumber(phoneNumber) {
    // 手机号的正则表达式
    const phoneRegex = /^1[3456789]\d{9}$/;

    // 使用正则表达式验证手机号是否合法
    if (phoneRegex.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
}