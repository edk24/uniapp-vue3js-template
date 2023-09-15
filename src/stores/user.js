import { defineStore } from 'pinia'
import { getToken, setToken } from '../utils/auth'

export const useUserStore = new defineStore({
    id: 'user',
    state: () => {
        return {
            userInfo: {},
            token: getToken() || null,
            temToken: null
        }
    },

    getters: {
        isLogin: (state) => state.token && state.userInfo
    },
    actions: {
        async getUser() {
            const data = await getInfo()
            this.userInfo = data
        },
        login(token) {
            this.token = token
            setToken(token)
            this.getUser()
        },
        logout() {
            this.token = ''
            this.userInfo = {}
            cache.remove(TOKEN_KEY)
        }
    }
})