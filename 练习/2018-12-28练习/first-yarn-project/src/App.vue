<template>
  <div id="app">
    <header>
      <div class="header">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>

          <!-- <el-submenu index="2">
            <template slot="title">国漫</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu> -->
          <el-menu-item index="2">国漫</el-menu-item>
          <el-menu-item index="3">日漫</el-menu-item>
          <el-menu-item index="4">轻小说</el-menu-item>
          <el-menu-item index="5">会员中心</el-menu-item>
          <!-- <el-menu-item index="5">阅读</el-menu-item> -->
          <el-select
            v-model="value9"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading">
            <el-option
              v-for="item in options4"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-menu>
        
      </div>
    </header>
    <div class="content">
      <div class="bgImg"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1",
      options4: [],
      value9: [],
      list: [],
      loading: false,
       states: null,
    };
  },
  mounted() {
    this.states = this.data.map(item =>{
       return item.title
    })
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
  },
  methods: {
    handleSelect(key, keyPath) {
      if(key == '1'){
          this.$router.push({path:'/'})
      }else if(key == '2'){
          this.$router.push({path:'/ComicList',query:{type:1}})         
      }else if(key == '3'){
          this.$router.push({path:'/ComicList',query:{type:2}})  
      }else{
        alert("功能尚未开发，请耐心等待 (￣▽￣)／")
      }
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options4 = [];
      }
    }
  }
};
</script>

<style>
body{
  background: #F9F9F9;
}
header {
  position: fixed;
  top: 0;
  height: 61px;
  width: 100%;
  background: #545c64;
  z-index: 999;
  opacity: .7;
  border-bottom: 1px #BABABF solid;
}

header .header {
  width: 1200px;
  margin: 0 auto;
}
.header .el-select{
  float: right;
  margin-top: 10px;
}

.content .bgImg{
  height: 180px;
  background: url(./img/2.png)
}
</style>
