<template>
  <div class="hleft">
    <el-row :gutter="80">
      <el-col :span="8">
        <div class="grid-content ep-bg-purple" />
        <div class="demo-type">
          <el-avatar :size="50" src="https://empty" @error="errorHandler">
            <img :src="logo" />
          </el-avatar>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content ep-bg-purple" />
        <div>
          <h1>{{ name }}</h1>
        </div>
      </el-col>

    </el-row>
  </div>

  <div class="rowc">
    <el-row :gutter="30">
      <el-col :span="5">
        <a :href=qq target="_blank">
          <div class="grid-content ep-bg-purple" /><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </a>
      </el-col>
      <el-col :span="5">
        <a :href=github target="_blank">
          <div class="grid-content ep-bg-purple" /><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
        </a>
      </el-col>
      <el-col :span="5">
        <a :href=telegram target="_blank">
          <div class="grid-content ep-bg-purple" /><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-telegram"></use>
          </svg>
        </a>
      </el-col>
      <el-col :span="5">
        <a :href=email target="_blank">
          <div class="grid-content ep-bg-purple" /><svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-a-13-Email"></use>
          </svg>
        </a>
      </el-col>
      <el-col :span="4">
        <div class="rowcc">
        <div class="grid-content ep-bg-purple" /><svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <div class="wechat-show">
          <img :src=weixin alt="微信二维码">
        </div>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script >
import { Web_Name, Web_logo, QQ, Github, Telegram, Email ,Weixin} from '../../config/config';

export default {
  name: 'header',
  data() {
    return {
      name: Web_Name,
      logo: Web_logo,
      qq: "https://res.abeim.cn/api/qq/?qq=" + QQ,
      github: "https://github.com/" + Github,
      telegram: "https://t.me/" + Telegram,
      email: "mailto:" + Email,
      weixin:Weixin,
    };
  },
};
</script>

