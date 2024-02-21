<template>
        <div style="max-width: 448px; margin:auto">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

<v-text-field
  density="compact"
  placeholder="Email address"
  prepend-inner-icon="mdi-email-outline"
  variant="outlined"
></v-text-field>


<v-text-field
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
sampleData: ''
}
},
created() {},
mounted() {},
unmounted() {},
methods: {}
}
</script>