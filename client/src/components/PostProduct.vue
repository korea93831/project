<template>
    <v-form ref="productForm">
    <v-container>
        <v-row>
            <v-col
            cols="12"
            >
            <v-file-input
            v-model="files"
            placeholder="Upload your documents"
            label="사진을 넣으세요"
            accept="image/*"
            counter
            multiple
            variant="outlined"
            prepend-icon="mdi-camera-plus-outline"
            >
        <v-row>
          <!-- <v-col sm="3" v-for="(file,f) in files" :key='f'> -->
          <!-- <img :ref="file" src=""
          </v-col> -->
        </v-row>
        <template v-slot:selection="{ fileNames }">
        <template v-for="fileName in fileNames" :key="fileName">
        <v-chip
          size="small"
          label
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </v-chip>
      </template>
    </template>
  </v-file-input>
            </v-col>
        </v-row>
      <v-row>
        <v-col
          cols="12">
          <v-text-field
            v-model="productTitle"
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
          <v-text-field
            v-model="productPrice"
            :rules="priceRules"
            :counter="10"
            label="판매가격"
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
          v-model="productContext"></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
components: {},
data() {
return {
    image:null,
    files:[],
    productTitle:'',
    previewImg:null,
    currentImg:null,
    productPrice:0,
    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
    productContext:'',
    
}
},
created() {},
mounted() {},
unmounted() {},
methods: {
  selectImg(image){
    this.currentImg=image;
    this.previewImg=URL.createObjectURL(this.currentImg);
  }
},
watch:{
  files(){
    console.log(this.files)
    this.$store.commit('setProductfiles',this.files)    
  },
  productTitle(){
    this.$store.commit('setProductTitle',this.productTitle)
  },
  productPrice(){
    this.$store.commit('setProductPrice',this.productPrice)
  },
  productContext(){
    this.$store.commit('setproductContext',this.productContext)
  }
}
}
</script>