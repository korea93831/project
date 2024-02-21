<template>
    <v-form ref="noticeForm">
    <v-container>
        <v-row>
            <v-col
            cols="12"
            md="3">
            <v-select
            v-model="select"
            :items="tags"
            label="주제"
            variant="outlined"
            ></v-select>
            </v-col>
        </v-row>
      <v-row>
        <v-col
          cols="12">
          <v-text-field
            v-model="noticeTitle"
            :rules="nameRules"
            :counter="10"
            label="제목"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12">
          <v-textarea
          label="내용"
          variant="outlined"
          v-model="noticeContext"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>

export default {
name: 'PostNotice',
components: {},
data() {
return {
    noticeTitle:'',
    select:null,
    tags:['동네질문','동네소식','생활정보','취미생활','일상','분실/실종센터','동네사진'],
    noticeContext:'',
    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    
}
},
created() {
},
mounted() {},
unmounted() {},
methods: {},
watch:{
  noticeTitle(){
    this.$store.commit('setNoticeTitle',this.noticeTitle)    
  },
  select(){
    this.$store.commit('setNoticeSelect',this.select)
  },
  noticeContext(){
    this.$store.commit('setNoticeContext',this.noticeContext)
  }
}
}
</script>