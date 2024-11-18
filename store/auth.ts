import Cookie from 'cookie'
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import { defineStore } from 'pinia'
import type { Login } from '~/types/login'

export const useAuthStore = defineStore('auth', {

  state: () => ({
    _companySettings: {},
    _token: '',
    _type: undefined,
    _centerGPS: []
  }),

  getters: {
    isAuthenticated: (state) => Boolean(state._token),
    token: (state) => state._token,
    companySettings: (state) => state._companySettings,
    type: (state) => state._type,
    centerGPS: (state) => state._centerGPS
  },

  actions: {
    async login(formData) {
      try {
        const data: Login = await $fetch(`${useRuntimeConfig().public.apiServerURL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify(formData)
        })

        if (data) {
          const { token, type, centerGPS, companySettings } = data

          this.setToken(token)
          this.setType(type)
          this.setCenterGPS(centerGPS)
          this._companySettings = companySettings

          return true
        } else return false
      } catch (e) {
        console.log(e)
        //commit('setError', e, { root: true })
        throw e
      }
    },
    async fetchCompanySettings() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/company/settings`);
        const settings = {
          clientsAllowedToSeeTheirOrderInfo: data?.settings?.clientsAllowedToSeeTheirOrderInfo,
          allowCourierToCloseTheDay: data?.settings?.allowCourierToCloseTheDay,
          limitOrdersForRoutePerDayType: data?.settings?.limitOrdersForRoutePerDayType,
          messagerType: data?.settings?.messagerType
        }
        if (settings) this._companySettings = settings
      } catch (e) {
        console.log(e)
        //commit('setError', e, { root: true })
        throw e
      }
    },
    async updateCompanySettings(settings) {
      try {
        this._companySettings = settings
      } catch (e) {
        console.log(e)
        //commit('setError', e, { root: true })
        throw e
      }
    },
    setToken(token: string) {
      this._token = token
      Cookies.set('jwt-token', token, { expires: 30 })
    },
    setType(type: number) {
      this._type = type
    },
    setCenterGPS(centerGPS) {
      this._centerGPS = centerGPS
    },
    logout() {
      this.$reset()
      Cookies.remove('jwt-token')
    },
    autoLogin() {
      //console.log('autoLogin')
      const token = useCookie('jwt-token')
      const centerGPS = useCookie('centerGPS')

      if (!!token.value && isJWTValid(token.value)) {
        this.setToken(token.value)
        this.setType(decryptTypeFromToken(token.value))
        this.setCenterGPS(centerGPS.value)
        //this._companySettings = token
      } else {
        this.logout()
      }
    }
  }
})

function isJWTValid(token: any)
{
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  //console.log(jwtData);
  const expires = jwtData.exp || 0
  return (new Date().getTime() / 1000) < expires
}

function decryptTypeFromToken(token) {
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  return jwtData.type
}

