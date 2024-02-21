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
import app from '../App.vue'
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
  data: () => ({
      footerHideTitle: '닫기',
      defaultBodyContent: 'body slot 영역을 작성해주세요.'
  }),
  watch:{

  },
  methods:{
     postSubmit(){
      if(app.menu=="notice"){
        let postJson=this.$store.getters.getPostNotice
      console.log(postJson)
      let posturl='';
      posturl='http://localhost:3000/data/regNotice';
      axios.post(posturl,postJson)
      .then(console.log('등록완료'))
      .catch(error=>{
        this.errorMessage=error.message;
        console.error("postErr",error);
      })
      this.$emit('submit')
      }else if(app.menu=="market"){
        let postJson=this.$store.getters.getPostProduct
        console.log(postJson)
        let posturl='';
        posturl='http://localhost:3000/data/reg'
      }
    },
  }
}
</script>