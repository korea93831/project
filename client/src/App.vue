<template>
 <v-app id="inspire">
    <v-app-bar extended>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <v-spacer></v-spacer>

<v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
        hide-details
      ></v-text-field>
      <v-btn icon="mdi-dots-vertical">
      </v-btn>
    </v-app-bar>
<v-navigation-drawer
    v-model="drawer"
    temporary
    >
      <v-list-item title="닉네임" subtitle="이메일"></v-list-item>
      <v-divider></v-divider>
      <!-- <v-list :items="items" :key="index" @click="menuAction(items[index].value)"></v-list> -->
      <v-list-item v-for="(item,index) in items" :key="index" @click="menuAction(item.value)">{{ item.title }}</v-list-item>
      </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import axios from 'axios';
import router from './router'


export default {
  name: 'App',

  data: () => ({
    alertmessage:'',
    drawer:false,
    group:null,
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
    ]
  }),
  watch:{
    group(){
      this.drawer=false
    },
  },
  methods:{
    menuAction(action){
      if(action==="market"){
        router.push({name:'home'});
        const response=axios.post('http://localhost:3000/data/allproduct');
        this.alertmessage=response.data
      }else if(action==="notice"){
        router.push({name:'notice'});
        const response=axios.post('http://localhost:3000/data/allnotice');
        this.alertmessage=response.data
      }else{
        alert('chatting')
      }
    }
  }
}
</script>

