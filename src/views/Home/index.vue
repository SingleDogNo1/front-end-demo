<template>
  <el-container class="home">
    <el-header class="header">header</el-header>
    <el-container class="inner">
      <el-aside class="slide-bar">
        <el-menu default-active="1" class="menu">
          <el-submenu
            v-for="(item, index) in slideBarList"
            :key="index"
            :index="(index + 1).toString()"
          >
            <template slot="title">
              <span>{{ item.template }}</span>
            </template>
            <el-menu-item-group v-for="(item2, index2) in item.list" :key="index2">
              <el-menu-item
                :index="`${index.toString()}-${index2.toString()}`"
                @click="$router.push({ name: item2.routerName })"
              >
                {{ item2.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main-container">
        <router-view class="content" />
      </el-main>
    </el-container>
    <el-footer class="footer">footer</el-footer>
  </el-container>
</template>

<script>
import slideBarList from '@/slideBarList/index.js'

export default {
  name: 'home',
  components: {},
  data() {
    return {
      slideBarList
    }
  }
}
</script>

<style lang="scss" scoped>
$header-height: 60px;
$footer-height: 60px;
.header {
  height: $header-height;
  line-height: $header-height;
  text-align: center;
  background: #eee;
}

.inner {
  height: calc(100vh - #{$header-height} - #{$footer-height});
  .slide-bar {
    padding: 20px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    /deep/ .el-menu {
      border-right: none;
    }
  }
  .el-main {
    padding: 0;
  }
  .content {
    width: 100%;
    height: 100%;
  }
}

.footer {
  height: $footer-height;
  line-height: $footer-height;
  text-align: center;
  background: #eee;
}
</style>
