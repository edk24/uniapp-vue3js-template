/**
 * 弹出 toast
 * 
 * @param msg 
 * @param icon 
 * @param mask 
 * @returns 
 */
export const showToast = (msg, icon = 'none', mask = false) => {
    return uni.showToast({
        title: msg,
        icon: icon,
        mask
    })
}

/**
 * 弹出 alert
 * @param content 
 * @param title 
 * @returns 
 */
export const showAlert = (content, title = '提示') => {
    return uni.showModal({
        title: title,
        content: content
    })
}

/**
 * 弹出加载动画
 * 
 * @param text 
 * @param mask 
 * @returns 
 */
export const showLoading = (text = null, mask = true) => {
    return uni.showLoading({
        title: text,
        mask: mask
    })
}

/**
 * 隐藏加载动画
 */
export const hideLoading = () => uni.hideLoading()



/**
 * 组合式API
 */
export const useMessage = () => {
    return {
        toast: showToast,
        success: (msg, mask = true) => showToast(msg, 'success', mask),
        error: (msg, mask = true) => showToast(msg, 'error', mask),
        alert: showAlert,
        showLoading,
        hideLoading
    }
}