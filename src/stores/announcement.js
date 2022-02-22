import { defineStore } from 'pinia'

export const useAnnouncement = defineStore('accouncement', {
  state: () => ({
    data: [],
    loading: false,
  }),
  getters: {
    getLoading() {
      return this.loading
    },
    getDetailData(index) {
      return this.data[index]
    }
  },
  actions: {
    setLoading(stat) {
      this.$patch((state) => {
        state.loading = stat
      })
    },
    setData(data) {
      this.$patch((state) => {
        state.data = data
      })
    }
  }
});
