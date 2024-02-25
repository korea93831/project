<template>
    <v-card>
      <v-card-title>
          {{ headerTitle }}
      </v-card-title>
      <v-card-text>
        <slot name="body">
            {{ defaultBodyContent }}
        </slot>
      </v-card-text>
      <v-card-actions class="justify-end mr-2 pb-4">
          <v-btn
              color="amber"
              dark
              rounded
              variant="flat"
              size="large"
              @click="$emit('hide')"
          >
              {{ footerHideTitle }}
          </v-btn>
          <template v-if="footerSubmit">
              <v-btn
                  color="success"
                  rounded
                  size="large"
                  variant="flat"
                  @click="postSubmit()"
              >
                  {{ footerSubmitTitle }}
              </v-btn>
          </template>
      </v-card-actions>
      <h1 @submit="childObject"></h1>
    </v-card>
  </template>
<script>
import axios from 'axios';
// import app from '../App.vue';
export default {
  name: 'FormDialog',
  props: {
    footerSubmit: {
      type: Boolean,
      default: true,
    },
    headerTitle: {
      type: String,
      default: '제목',
    },
    footerSubmitTitle: {
      type: String,
      default: '등록',
    },
  },
  watch:{
  },
  data: () => ({
      footerHideTitle: '닫기',
      defaultBodyContent: 'body slot 영역을 작성해주세요.',
      isLogged:false,
      files:[],
      filesPreview:[],
      uploadImageIndex:0
  }),
  unmounted(){
  },
  methods:{
     postSubmit(){
      const menu=this.$store.getters.getMenuState;
      if(menu==="notice"){
        let postJson=this.$store.getters.getPostNotice
      console.log(postJson)
      let posturl='';
      posturl='http://localhost:3000/data/regNotice';
      axios.post(posturl,postJson)
      .then(
        console.log(Response)
      )
      .catch(error=>{
        this.errorMessage=error.message;
        console.error("postErr",error);
      })
      }
      else if(menu=="market"){
        let postJson=this.$store.getters.getPostProduct
        console.log(postJson)
        // let posturl='';
        // posturl='http://localhost:3000/data/reg'
      }
      else if(menu=='join'){
        let postJson=this.$store.getters.getJoinInfo
        // console.log(`클라이언트-> 서버 : ${postJson}`)
        let postUrl='http://localhost:3000/auth/join';
        axios.post(postUrl,postJson)
        .then(console.log(Response))
        .catch((err)=>{
          console.error(err);
        })
      }
      else if(menu=='login'){
        let postJson=this.$store.getters.getLoginInfo
        // console.log(`클라이언트->서버: ${String(postJson)}`)
        let postUrl='http://localhost:3000/auth/login';
        axios.post(postUrl,postJson)
        .then((response)=>{
          this.$store.commit('setLoggedUser',response.data.login);
          this.$store.commit('setLoggedUserEmail',response.data.userEmail);
          this.$store.commit('setLoggedUserNickname',response.data.userNickname);
          // console.log(this.$store.getters.getLoggedUserInfo);
          // app.title=this.$store.getters.getLoggedUserInfo['userEmail'];
          // app.subtitle=this.$store.getters.getLoggedUserInfo['userNickname'];
          console.log(this.$store.getters.getLoggedUserInfo.logged)
         
        })
        .catch((err)=>{
          console.error(err);
        })
        this.$emit('islogged')
      }
      else if(menu=='product'){
        let postJson=this.$store.getters.get
      }
      this.$emit('submit')
    },
  }
}
</script>