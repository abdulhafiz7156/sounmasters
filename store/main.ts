import { defineStore } from 'pinia'
import { useAuthStore } from '@/store/auth'
import { type Courier } from '@/types/courier'

export const useMainStore = defineStore('main', {

  state: () => ({}),

  getters: {},

  actions: {
    async fetchStylesByStyleDir(styleDir: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/artists/getByStyleDir/${styleDir}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async addToFavoriteStyle(formData: any) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/favorite/styles/add`, {
          method: 'POST',
          body: JSON.stringify(formData)
        })
        return data
      } catch (e) {
        //// commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async removeFavoriteStyle(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/favorite/styles/remove/${id}`, {
          method: 'DELETE',
        })
        return data
      } catch (e) {
        //// commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchSuggestionsNominatim(address: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/suggest/nominatim?address=${address}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchSettingsForCourier() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/settings`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchOrdersInfoForClient(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/client/${id}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchOrdersForCourier(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/for/courier/today`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchTodayOrderByIDForCourier(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/${id}/for/courier/today`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchSettings() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/company/settings`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //throw e;
      }
    },
    async forceRunMailing(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/run/${id}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //throw e;
      }
    },
    async fetchMailings(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/date/${date}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //throw e;
      }
    },
    async fetchStatistic(dateFrom, dateTo) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/statistic/from/${dateFrom}/to/${dateTo}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //throw e;
      }
    },
    async fetchOrders(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/date/${date}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //throw e;
      }
    },
    async couriersCurrentGPSPossition(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/gps/last/active/date/${date}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //throw e;
      }
    },
    async fetchFreeOrders(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/free/${date}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchDeletedOrders(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/deleted/${date}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchOrderById(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/${id}`)
        console.log(data)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchMailingTemplateById(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/template/${id}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchActiveMailingTemplates() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/templates`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchDeletedMailingTemplates() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/templates/deleted`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchCouriers() {
      try {
        const data: Courier[] = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier`)
        if (!!data && data.length > 0) {
          data.map((c) => {
            c.visible = true
          })
        }

        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchBannedCouriers() {
      try {
        const data: Courier[] = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/banned`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchDeletedCouriers() {
      try {
        const data: Courier[] = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/deleted`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchCourierById(id: string) {
      try {
        const data: Courier = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/${id}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchIntervals() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/interval`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async exportToExcel(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/${id}/export/`)

        //if (error) return downloadErrorInterceptor(error)

        return data

        /*  this.$axios.interceptors.response.use(
            (response) => {
              return response
            },
            (error) => {
              return downloadErrorInterceptor(error)
            }
          )

          return this.$axios({
            method: 'get',
            url: ,
            responseType: 'blob'
          });*/

        //const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/${id}/export/`);
      } catch (e) {
        //// commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchRoutesByDate(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/date/${date}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async fetchExtendedRoutesByDate(date: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/extended/date/${date}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async fetchRoutesById(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/${id}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async createWhatsAppMonsterInstanceID(token: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/vendors/wam/create_instance?access_token=${token}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async createWhatsAppMonsterQRCode(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/vendors/wam/QR_code?instance_id=${fd.instance_id}&access_token=${fd.access_token}`)
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async getDaDataBalance() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/company/dadata/balance`)
        return data
      } catch (e) {
        //// commit("setError", e, { root: true });
        // throw e;
      }
    },

    async deleteInterval(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/interval/delete/${id}`, {
          method: 'DELETE'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async deleteOrder(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/delete/${id}`, {
          method: 'DELETE'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },

    async deleteCourier(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/delete/${id}`, {
          method: 'DELETE'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async deleteMailingTemplate(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/template/${id}`, {
          method: 'DELETE'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async deleteRoute(id: string) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/delete/${id}`, {
          method: 'DELETE'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async transferOrderOnOtherDate(formData) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/transfer`, {
          method: 'POST',
          body: JSON.stringify(formData)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },

    async addOrder(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/create`, {
          method: 'POST',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async addMailing(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing`, {
          method: 'POST',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async addMailingTemplate(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/template`, {
          method: 'POST',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async addCourier(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/create`, {
          method: 'POST',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async sortRouteOrders({ routeId, formData }) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/${routeId}/sort/orders/`, {
          method: 'POST',
          body: JSON.stringify(formData)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async attachRouteToOrder({ routeId, orderId }) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/${routeId}/attach/order/${orderId}`, {
          method: 'PATCH'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async detachRouteFromOrder({ routeId, orderId }) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/${routeId}/detach/order/${orderId}`, {
          method: 'PATCH'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async addRoute(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/create`, {
          method: 'POST',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async closeTheDayForCourier() {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/closeDay`, {
          method: 'POST'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async closeTheDayForLogist({ date, routeID }) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/closeDay/${date}/route/${routeID}`, {
          method: 'POST'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async createInterval(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/interval/create`, {
          method: 'POST',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateRoute(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/route/update`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //throw e;
      }
    },
    async updateOrder(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/update`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateInterval(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/interval/update`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateCourier(fd) {
      try {
        const data: Courier = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/update`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateMailingTemplate(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/template/update/`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateOrderFromCourier(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/from/courier`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateSettingsGeocoder(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/company/update/settings/geodecoder`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateSettingsMessager(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/company/update/settings/messager`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async updateSettingsLimitations(fd) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/company/update/settings/limits`, {
          method: 'PATCH',
          body: JSON.stringify(fd)
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async restoreOrder(id) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/order/restore/${id}`, {
          method: 'PATCH'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        //  throw e;
      }
    },
    async unbanCourier(id) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/activate/${id}`, {
          method: 'PATCH'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async banCourier(id) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/ban/${id}`, {
          method: 'PATCH'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async restoreCourier(id) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/courier/restore/${id}`, {
          method: 'PATCH'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    },
    async restoreTemplate(id) {
      try {
        const data = await useIFetch(`${useRuntimeConfig().public.apiServerURL}/mailing/template/restore/${id}`, {
          method: 'PATCH'
        })
        return data
      } catch (e) {
        // commit("setError", e, { root: true });
        // throw e;
      }
    }
  }
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
