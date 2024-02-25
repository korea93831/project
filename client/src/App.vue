<template>
 <v-app id="inspire">
    <v-app-bar extended>
      <v-app-bar-nav-icon @click=drawerNav></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <v-spacer></v-spacer>
      <div v-if=!isUser>
        <v-btn variant="outliend" @click=join()>SIGN-UP</v-btn>
        <v-btn  variant="outliend" @click=login()>SIGN-IN</v-btn>
      </div>
      <div v-else>
        <v-btn  variant="outliend" @click=logout()>LOGOUT</v-btn>
      </div>
  
<!-- <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
      ></v-text-field> -->
      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>
<v-navigation-drawer
    v-model="drawer"
    temporary
    >
      <v-list-item 
      :title="title" 
      :subtitle="subtitle"></v-list-item>
      <v-divider></v-divider>
      <!-- <v-list :items="items" :key="index" @click="menuAction(items[index].value)"></v-list> -->
      <v-list-item v-for="(item,index) in items" :key="index" @click="menuAction(item.value)">{{ item.title }}</v-list-item>
      </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <v-container>
                <!-- 게시글 생성 버튼 -->
      <VLayoutItem model-value position="bottom" class="text-end" size="88">
        <div class="ma-4 pointer-events-initial">
          <VBtn icon="mdi-plus" size="large" color="primary" elevation="8" v-on:click="showDialog()"></VBtn>
        </div>
      </VLayoutItem>
        <v-dialog
          v-model="FormDialog"
          width="50%"
        >
          <form-dialog
            
            @hide="hideDialog()"
            @submit="submitDialog()"
            @islogged="isloggedUser()"
          >
            <template v-slot:body>


              <!-- <v-text-field
                  placeholder="내용을 입력하세요"
              /> -->
              
              <div v-if="menu==='notice'">
                <PostNotice></PostNotice> 
              </div>
              <div v-else-if="menu==='market'">
                <PostProduct></PostProduct>
              </div>
              <div v-else-if="menu==='login'">
                <LoginForm></LoginForm>
              </div>
              <div v-else-if="menu==='join'">
                <JoinForm></JoinForm>
              </div>
            </template>
          </form-dialog>


        </v-dialog>

    </v-container>
  </v-app>


</template>

<script>
// import axios from 'axios';
import router from './router'
import FormDialog from './components/FormDialog.vue'
import PostNotice from './components/PostNotice.vue'
import PostProduct from './components/PostProduct.vue'
import JoinForm from './components/joinForm.vue'
import LoginForm from './components/LoginForm.vue'
import store from '@/store/index'
import axios from 'axios'

export default {
  name: 'App',
  components:{FormDialog,PostNotice,PostProduct,LoginForm,JoinForm},
  data: () => ({
    FormDialog:false,
    alertmessage:[],
    drawer:false,
    group:null,
    frontmenu:"market",
    dialogTitle:'중고물품 올리기',
    isUser:false,
    items:[
      {
        title:'중고장터',
        value:'market'
      },
      {
        title:'게시판',
        value:'notice'
      },
      {
        title:'채팅',
        value:'chatting'
      }
    ],
    title:store.getters.getLoggedUserInfo['userNickname'],
    subtitle:store.getters.getLoggedUserInfo['userEmail']
  }),
  watch:{
    group(){
      this.drawer=false
    },
  },
  computed:{
    // isLogged(){
    //   return this.$refs.child_component.isLogged;
    // }
  },
  methods:{

    // 메뉴선택시 이벤트
    menuAction(action){
      // let posturl="";
      if(action==="market"){
        router.push({name:'home'});
        // posturl='http://localhost:3000/data/allproduct';
        this.$store.commit('setMenuState',action)  
        this.menu=this.$store.getters.getMenuState
        this.dialogTitle="중고물품 올리기"
      }else if(action==="notice"){
        router.push({name:'notice'});
        // posturl='http://localhost:3000/data/allnotice';
        this.$store.commit('setMenuState',action)
        this.menu=this.$store.getters.getMenuState
        this.dialogTitle="게시글 올리기";
      }else{
        alert("기능개발중");
      }
    },
    join(){
      this.FormDialog=true;
      this.$store.commit('setMenuState','join') 
      this.menu=this.$store.getters.getMenuState
    },
    login(){
      this.FormDialog=true;
      this.$store.commit('setMenuState','login') 
      this.menu=this.$store.getters.getMenuState
    },
    logout(){
      this.title="",
      this.subtitle,
      this.isUser=false
      this.$store.commit('setLoggedUser',false)
      this.$store.commit('setLoggedUserEmail','')
      this.$store.commit('setLoggedUserNickname','')
      const postUrl='http://localhost:3000/auth/join'
      axios.post(postUrl)
    },
    showDialog(){
      this.FormDialog=true;
      // console.log(this.$loginStore.getters.getLoggedUserInfo.logged)
    },
    hideDialog(){
      this.FormDialog=false;
    },
    submitDialog(){
      this.hideDialog()
    },
    drawerNav(){
      this.drawer=!this.drawer
      this.title=store.getters.getLoggedUserInfo.userNickname
      this.subtitle=store.getters.getLoggedUserInfo.userEmail
    },
    isloggedUser(){
      this.isUser=true
      console.log(this.isUser)
    }
  },
  unmounted(){
    // this.$store.commit('setLoggedUser',false);
    // this.$store.commit('setLoggedUserEmail','');
    // this.$store.commit('setLoggedUserNickname','');
  }
}
</script>


<style scoped>
  .pointer-events-none {
    pointer-events: none;
  }
  
  .pointer-events-initial {
    pointer-events: initial;
  }
</style>
