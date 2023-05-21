<template>
  <div class="footerc">
    <h3>Copyright&nbsp;&copy;&nbsp;2023&nbsp;海洋淳.All&nbsp;Rights&nbsp;Reserved</h3>
    <a :href="filing" target="_blank">{{ filing }}</a>&nbsp;<img v-if="publicns" class="pns"
      src="https://yun.oceanchun.com/d/Drawingbed/webpolice.svg?sign=iiwKyH9vnmfACMz-6ijoPNew2oqkdbntTzDhDTe8c18=:0"
      alt="">
    <a :href="publicnslink" target="_blank">{{ publicns }}</a>

  </div>
</template>

<script >
import { Filing_Number, Public_Network_Security } from '../../config/config';

export default {
  name: 'footer',
  data() {
    return {
      filing: Filing_Number,
      // maxResults: Web_logo,
      href: "https://beian.miit.gov.cn/",
      publicnslink: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=" + Public_Network_Security,
      publicns: Public_Network_Security,
    };
  },
};
</script>
