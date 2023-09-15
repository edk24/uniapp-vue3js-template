import { TOKEN_KEY } from '@/enums/cacheEnums'
import cache from './cache'

export function getToken() {
    return cache.get(TOKEN_KEY)
}

export function setToken(token) {
    return cache.set(TOKEN_KEY, token)
}