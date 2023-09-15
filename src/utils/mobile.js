/**
 * 手机号加掩码
 * 
 * @param phoneNumber 
 * @returns 
 */
export function maskPhoneNumber(phoneNumber) {
    // 检查手机号码是否合法
    if (!/^1\d{10}$/.test(phoneNumber)) {
        return ''
    }

    // 将手机号码的中间四位数字替换为星号
    const maskedNumber = phoneNumber.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');

    return maskedNumber;
}