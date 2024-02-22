<template>
  <div style="max-width: 448px; margin:auto">
    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

<v-text-field
  v-model="email"
  density="compact"
  placeholder="Email address"
  prepend-inner-icon="mdi-email-outline"
  variant="outlined"
></v-text-field>

<v-text-field
  v-model="password"
  :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
  :type="visible ? 'text' : 'password'"
  density="compact"
  placeholder="Enter your password"
  prepend-inner-icon="mdi-lock-outline"
  variant="outlined"
  @click:append-inner="visible = !visible"
></v-text-field>

</div>
     
</template>
<script>
export default {
components: {},
data() {
return {
  email:'',
  password:''
}
},
watch:{
  email(){
    this.$store.commit('setLoginEmail',this.email)
  },
  password(){
    this.$store.commit('setLoginPassword',this.password)
  }
},
created() {},
mounted() {},
unmounted() {},
methods: {}
}
</script>