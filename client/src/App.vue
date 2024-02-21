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
    <v-container>
                <!-- 게시글 생성 버튼 -->
      <VLayoutItem model-value position="bottom" class="text-end" size="88">
        <div class="ma-4 pointer-events-initial">
          <VBtn icon="mdi-plus" size="large" color="primary" elevation="8" v-on:click="showDialog()"></VBtn>
        </div>
      </VLayoutItem>
        <v-dialog
          v-model="FormDialog"
        >
          <form-dialog
            header-title=dialogtitle
            @hide="hideDialog('Text')"
            @submit="submitDialog('Text')"
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
// import JoinForm from './components/joinForm.vue'


export default {
  name: 'App',
  components:{FormDialog,PostNotice,PostProduct},
  data: () => ({
    FormDialog:false,
    alertmessage:[],
    drawer:false,
    group:null,
    menu:"market",
    dialogTitle:'중고물품 올리기',
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
  computed:{
    
  },
  methods:{

    // 메뉴선택시 이벤트
    menuAction(action){
      // let posturl="";
      if(action==="market"){
        router.push({name:'home'});
        // posturl='http://localhost:3000/data/allproduct';
        
        this.menu='market'
        this.dialogTitle="중고물품 올리기"
      }else if(action==="notice"){
        router.push({name:'notice'});
        // posturl='http://localhost:3000/data/allnotice';
        
        this.menu='notice';
        this.dialogTitle="게시글 올리기";
      }else{
        alert("기능개발중");
      }
    },

    showDialog(){
      this.FormDialog=true;
      console.log('dialog open')
    },
    hideDialog(){
      this.FormDialog=false;
    },
    submitDialog(){
      this.hideDialog()
    }
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
