<template>
  <div>  
    <v-container>
        <v-row>
          <v-col
            v-for="n in notice.length"
            :key="n"
            cols="12"
          >
            <v-card height="200">
              <v-card-item>
            <div>
              <div class="text-overline mb-1">
                <v-chip>{{ notice[n-1].NoticeTag }}</v-chip>
              </div>
              <div class="text-h6 mb-1">
                {{ notice[n-1].NoticeTitle }}
              </div>
              <v-divider></v-divider>
              <div class="text-h8 mb-8">
                {{ notice[n-1].NoticeContext }}
              </div>
              <v-spacer></v-spacer>
              <div class="text-caption">좋아요{{ notice[n-1].goodCount }} 조회{{ notice[n-1].repleCount }}</div>
              <div></div>
            </div>
          </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

</template>
<script>
import axios from 'axios';

export default {
components: {},
data() {
return {
  notice:[]
}
},
created() {
  this.getPostedNotice();
},
mounted() {
},
unmounted() {},
methods: {
  getPostedNotice(){
    let postUrl="http://localhost:3000/data/allnotice"
    axios.post(postUrl,JSON.stringify())
    .then((response)=>{
      for(let i=0;i<response.data.length;i++){
        this.notice.push(response.data[i])
      }
    })
  }
}
}
</script>