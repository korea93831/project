<template>
    <v-form ref="joinForm" >
    <v-container>

        <v-row>
            <v-col
            cols="12"
            >
                <v-text-field
                v-model="email"
                :rules=emailRules
                variant="outlined"
                label="Email address"
                type="email"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            >
                <v-text-field
                 v-model="password"
                variant="outlined"
                counter="8"
                label="Password"
                style="min-height: 96px"
                type="password"
                 ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            >
                <v-text-field
                v-model="phone"
                variant="outlined"
                label="nickname"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            md="2"
            >
                <v-select
                v-model="select"
                :items="local"
                label="지역"
                variant="outlined"
             ></v-select>
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
sampleData: '',
local:["서울","부산","대구","인천","광주","대전","울산","세종","경기","강원","충북","충남","전북","경북","경남","제주"],
email:'',
password:'',
emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
// passwordRules:[
//     value=>{
        
//     }
// ]
}
},
created() {},
mounted() {},
unmounted() {},
methods: {}
}
</script>