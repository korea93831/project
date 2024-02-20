<template>

    <v-dialog :value="value">
        <v-card>
        <v-card-title>{{ headerTitle }}</v-card-title>
        <v-card-text>
            <slot name="body">{{ bodyContent }}</slot>
        </v-card-text>
        <v-card-actions>
            <v-btn
                color="amber"
                dark
                small
                @click="$emit('hide')">
                등록
            </v-btn>

            <v-btn
                color="success"
                small
                @click="$emit('submit')"
                >
                삭제
            </v-btn>
        </v-card-actions>
    </v-card>
    </v-dialog>
    
</template>
<script>
export default {
    name:'formDialog',
    props:{
        value:Boolean,
        headerTitle:{
            type:String,
            default:'제목'
        },
    },
    components: {},
    data(){
        return{
            bodyContent:'body slot 영역'
        };
    },
    methods:{
        
    }
}
</script>