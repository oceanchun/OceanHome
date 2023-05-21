<template>
  <div class="mainrightc">
    <p class="time-module">{{ currentDate }} {{ currentWeekday }}<br>{{ currentTime }}</p>
    <div class="hitokoto-module">
      <p>{{ hitokoto }}</p>
      <p style="text-align: right;">---来自"{{ hitfrom }}"作者：{{ hitcreator }}</p>
    </div>
    <div class="pcs">
      <!-- <span>网站列表</span> -->
    </div>
    <div class="bordered-box" v-for="(item, i) in subnum" :key="i">
      <a :href=sublink[i] target="_blank" class="aright">{{ subname[i] }}</a>
    </div>
  </div>
</template>

<script>
import { Substation_Number, Substation_Name, Substation_Link } from '../../config/config';
export default {
  name: 'mainright',
  data() {
    return {
      subnum: Substation_Number,
      subname: Substation_Name,
      sublink: Substation_Link,
      currentTime: new Date().toLocaleTimeString(),
      // currentTime: new Date().toLocaleTimeString(),
      hitokoto: '美好的一言正在加载...',
      hitfrom: '神秘机构',
      hitcreator: '神秘人',
      currentDate: "",
      currentWeekday: "",
    }
  },
  mounted() {
    setInterval(() => {
      const date = new Date();
      this.currentTime = date.toLocaleTimeString();
    }, 1000);

    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  created() {
    this.getHitokoto()

    // 每隔一分钟获取一次一言内容
    setInterval(() => {
      this.getHitokoto()
    }, 60000)
  },

  methods: {
    async getHitokoto() {
      try {
        const response = await fetch('https://v1.hitokoto.cn/')
        const data = await response.json()
        this.hitokoto = data.hitokoto
        this.hitfrom = data.from
        this.hitcreator = data.creator
      } catch (error) {
        console.error(error)
      }
    },
    updateTime() {
      const now = new Date();
      const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      this.currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
      this.currentWeekday = weekdays[now.getDay()];
      this.currentTime = now.toLocaleTimeString("en-US", { hour12: false });
    }
  },
}
</script>

<style scoped></style>
