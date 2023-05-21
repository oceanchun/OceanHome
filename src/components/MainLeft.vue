<template>
  <div class="mainleftc">
    <span class="textc">{{ address }}</span>
    <span class="text-border">{{ perquo }}</span>
  </div>
</template>

<script >
import { Personal_Quote,Web_Address } from '../../config/config';

export default {
  name: 'mainleft',
  data() {
    return {
      perquo: Personal_Quote,
      address:Web_Address,
    };
  },
};
</script>