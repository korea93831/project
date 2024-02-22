import { createStore } from 'vuex'
import loginStore from '@/store/loginStore'

export default createStore({
  state: {
    postNotice:{"noticeTitle":'',"select":'',"noticeContext":''},
    postProduct:{"files":'',"productTitle":'',"productPrice":'',"productContext":''},
    postJoin:{"email":'',"password":'',"nickname":'',"localMain":'',"localSub":''},
    postLogin:{"email":'',"password":''},
    allNotice:[],
    allProduct:[],
    menu:''
  },
  getters: {
    getPostNotice(state){
      return state.postNotice
    },
    getPostProduct(state){
      return state.postProduct
    },
    getJoinInfo(state){
      return state.postJoin
    },
    getLoginInfo(state){
      return state.postLogin
    },
    getAllNotice(state){
      return state.allNotice
    },
    getAllProduct(state){
      return state.allProduct
    },
    getMenuState(state){
      return state.menu
    },
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
    setProductContext(state,item){
      state.postProduct.productContext=item
    },
    setJoinEmail(state,item){
      state.postJoin.email=item
    },
    setJoinPassword(state,item){
      state.postJoin.password=item
    },
    setJoinNickname(state,item){
      state.postJoin.nickname=item
    },
    setJoinSelect(state,item){
      state.postJoin.localMain=item
    },
    setJoinLocalSub(state,item){
      state.postJoin.localSub=item
    },
    setLoginEmail(state,item){
      state.postLogin.email=item
    },
    setLoginPassword(state,item){
      state.postLogin.password=item
    },
    addNotice(state,item){
      state.allNotice.push(item)
    },
    addProduct(state,item){
      state.allProduct.push(item)
    },
    setNotice(state,item){
      state.allNotice=item
    },
    setProduct(state,item){
      state.allProduct=item
    },
    setMenuState(state,item){
      state.menu=item
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
    },
    addNotice({commit},item){
      commit('addNotice',item)
    },
    addProduct({commit},item){
      commit('addProduct',item)
    },
    setNotice({commit},item){
      commit('setNotice',item)
    },
    setProduct({commit},item){
      commit('setProduct',item)
    },
    setMenuState({commit},item){
      commit('setMenuState',item)
    },
    setJoinEmail({commit},item){
      commit('setJoinEmail',item)
    },
    setJoinPassword({commit},item){
      commit('setJoinPassword',item)
    },
    setJoinNickname({commit},item){
      commit('setJoinNickname',item)
    },
    setJoinSelect({commit},item){
      commit('setJoinSelect',item)
    },
    setJoinLocalSub({commit},item){
      commit('setJoinLocalSub',item)
    },
    setLoginEmail({commit},item){
      commit('setLoginEmail',item)
    },
    setLoginPassword({commit},item){
      commit('setLoginPassword',item)
    }
  },
  modules: {
    loginStore:loginStore
  },
})
