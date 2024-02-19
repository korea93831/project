<template>
 <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>오-마켓</v-app-bar-title>

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
export default {
  name: 'App',

  data: () => ({
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
      console.log(action);
      if(action==="market"){
        alert('market')
      }else if(action==="notice"){
        alert('notice')
      }else{
        alert('chatting')
      }
    }
  }
}
</script>

