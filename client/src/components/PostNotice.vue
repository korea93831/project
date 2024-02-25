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
methods: {
  imageUploaad(){
    let num=-1;
    for(let i=0;i<this.$refs.files.files.length;i++){
      this.files=[
        ...this.files,
        {
          file:this.$refs.files.files[i],
          preview:URL.createObjectURL(this.$refs.files.files[i]),
          number:i
        }
      ];
      num=i;
    }
    this.uploadImageIndex=num+1;
    console.log(this.files);
  },
  imageAddUpload(){
    console.log(this.$refs.files.files);
    let num=-1;
    for(let i=0;i<this.$refs.files.files.length;i++){
      this.files=[
        ...this.files,
        {
          file:this.$refs.files.files[i],
          preview:URL.createObjectURL(this.$refs.files.files[i]),
          number:i+this.uploadImageIndex
        }
      ];
      num=i;
    }
    this.uploadImageIndex=this.uploadImageIndex+num+1;
  }
},
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