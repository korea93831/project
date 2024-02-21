import { createStore } from 'vuex'

export default createStore({
  state: {
    postNotice:{"noticeTitle":'',"select":'',"noticeContext":''},
    postProduct:{"files":'',"productTitle":'',"productPrice":'',"productContext":''},
  },
  getters: {
    getPostNotice(state){
      return state.postNotice
    },
    getPostProduct(state){
      return state.postProduct
    }
  },
  mutations: {
    setNoticeTitle(state,item){
      state.postNotice.noticeTitle=item
    },
    setNoticeSelect(state,item){
      state.postNotice.select=item
    },
    setNoticeContext(state,item){
      state.postNotice.noticeContext=item
    },
    setProductfiles(state,item){
      state.postProduct.files=item
    },
    setProductTitle(state,item){
      state.postProduct.productTitle=item
    },
    setProductPrice(state,item){
      state.postProduct.productPrice=item
    },
    setproductContext(state,item){
      state.postProduct.productContext=item
    }
  },
  actions: {
    setNoticeTitle({commit},item){
      commit('setNoticeTitle',item)
    },
    setNoticeSelect({commit},item){
      commit('setNoticeSelect',item)
    },
    setNoticeContext({commit},item){
      commit('setNoticeContext',item)
    },
    setProductfiles({commit},item){
      commit('setProductfiles',item)
    },
    setProductTitle({commit},item){
      commit('setProductTitle',item)
    },
    setProductPrice({commit},item){
      commit('setProductPrice',item)
    },
    setproductContext({commit},item){
      commit('setproductContext',item)
    }
  },
  modules: {
  }
})
