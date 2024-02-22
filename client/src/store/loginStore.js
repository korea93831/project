export const loginStore={
  namespaced:true,
  state:()=>{
    return loggedUserInfo={"logged":false,"userEmail":'',"userNickname":''}
   
  },
  getters:{ 
  getLoggedUserInfo(state){
      return state.loggedUserInfo
    }
  },
  mutations:{
  setLoggedUser(state,item){
      state.loggedUserInfo.logged=item
    },
    setLoggedUserEmail(state,item){
      state.loggedUserInfo.userEmail=item
    },
    setLoggedUserNickname(state,item){
      state.loggedUserInfo.userNickname=item
    },
  },
  actions:{
  setLoggedUser({commit},item){
      commit('setLoggedUser',item)
    },
    setLoggedUserEmail({commit},item){
      commit('setLoggedUserEmail',item)
    },
    setLoggedUserNickname({commit},item){
      commit('setLoggedUserNickname',item)
    },
  }
};