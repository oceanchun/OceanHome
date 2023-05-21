<template>
  <div class="common-layout">
    <el-container>
      <el-header class="headerc">
        <Header />
      </el-header>
      <el-main class="mainc">
        <MainLeft />
        <MainRight />
        <!-- <Test /> -->
        <Home />
      </el-main>
      <el-footer class="footerc">
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import MainLeft from './components/MainLeft.vue'
import MainRight from './components/MainRight.vue'
import Footer from './components/Footer.vue'
import Test from './components/Test.vue'
import Home from './components/Home.vue'
</script>
