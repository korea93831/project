<template>
  <div>  
    <v-container>
        <v-row>
          <v-col
            v-for="n in 6"
            :key="n"
            cols="12"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

</template>
<script>
export default {
components: {},
data() {
return {
  alertmessage:''
}
},
created() {
},
mounted() {
},
unmounted() {},
methods: {}
}
</script>