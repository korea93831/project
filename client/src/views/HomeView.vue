<template>
  <mainLayout/>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import mainLayout from '../components/mainLayout.vue';

export default defineComponent({
  name: 'mainLayout',

  components: {
    mainLayout,
  },
});
</script>
