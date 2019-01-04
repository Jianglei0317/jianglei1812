<template>
    <div>
        <div class='wrap'>
            <h1><i class="el-icon-document"></i>漫画列表</h1>
            <div class="content">
                <div class="list">
                    <ul>
                        <li v-for="item in comicList" :key="item.id">
                            <img :src="item.src">
                            <div>
                                <h2>{{item.title}}</h2>
                                <span>作者：xxx</span>
                                <span>类型：校园/搞笑/恋爱</span>
                                <span>状态：连载中</span>
                                <span>最新：第三话</span>
                                <el-button type="danger" round style="width:80px;" size="small" @click="startRead(item.id)">开始阅读</el-button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="sidebar">
                    <h2><i class="el-icon-star-off"></i>人气排行</h2>
                    <ul>
                        <li v-for="(item,index) in comicList" :key="item.title">
                            <span>{{index+1}}</span>
                            <img v-if="index == 0" :src="item.src"/>
                            <span>{{item.title}}</span>
                            <span v-if="index == 0">作者：xxx</span>
                            <span v-if="index == 0">最新：第三话</span>
                        </li>
                    </ul>
                </div>
                <div class="footer">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="100">
                    </el-pagination>
                </div>             
            </div>
        </div>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:'',
                type:null,
                CHNComicList:[
                {src:require('@/img/110.jpg'),id:"110",title:'通灵妃'},{src:require('@/img/111.jpg'),id:"111",title:'英雄？我早就不当了'},{src:require('@/img/112.jpg'),id:"112",title:'妹子与科学'},
                {src:require('@/img/113.jpg'),id:"113",title:'尸兄（我叫白小飞）'},{src:require('@/img/114.jpg'),id:"114",title:'重生之都市修仙'},{src:require('@/img/115.jpg'),id:"115",title:'我的反派女友'},
                {src:require('@/img/116.jpg'),id:"116",title:'天籁音灵'},{src:require('@/img/117.jpg'),id:"117",title:'怪奇笔记'}],
                JPComicList:[
                {src:require('@/img/210.jpg'),id:"210",title:'航海王'},{src:require('@/img/211.jpg'),id:"211",title:'银魂'},{src:require('@/img/212.jpg'),id:"212",title:'死神/境·界'},
                {src:require('@/img/213.jpg'),id:"213",title:'博人传-火影次世代-'},{src:require('@/img/214.jpg'),id:"214",title:'黑色四叶草'},{src:require('@/img/215.jpg'),id:"215",title:'名侦探柯南'},
                {src:require('@/img/216.jpg'),id:"216",title:'我的英雄学园'},{src:require('@/img/217.jpg'),id:"217",title:'七人传奇'}]
            }
        },
        methods:{
            startRead(id){
                this.$router.push({path:('ComicDetails/id/'+id)})             
            }
        },
        mounted() {
            this.type = this.$route.query.type
        },
        computed:{
            comicList(){
                if(this.type == 1){
                    return this.CHNComicList
                }else if(this.type == 2){
                    return this.JPComicList
                }
            }
        },
        watch:{
            $route(val){
                this.type = this.$route.query.type
            }
        }

    }
</script>

<style scoped>
    .wrap{
        width: 1200px;
        height: 750px;
        border: 1px #D6D6D6 solid;
        margin: 10px auto
    }
    .wrap h1{
        margin: 10px; 
        padding: 0; 
        padding-bottom: 5px;
        border-bottom:  1px solid #D6D6D6;   
    }
    .content{
        margin: 0;
        padding: 0;
    }
    .content .list{
        margin: 10px;
        width: 850px;
        height: 600px;
        float: left;
    }
    .content .footer{
        clear: both;
        margin-left: 150px;
    }
    .list ul{
        margin: 0;
        padding: 0;
        width: inherit;
        height: inherit;
        display: flex;
        flex-wrap :wrap;
        align-content: top;
    }
    .list ul li{
        list-style: none;
        margin: 5px;
        width: 270px;
        height: 175px;
        /* background: lightgreen; */
    }
    .list ul li>img{
        width: 120px;
        height: 160px;
        /* margin: 10px; */
    }
    .list ul li>div{
        float: right;
        width: 130px;
        height: 160px;
        display: flex;
        flex-direction:column;
        justify-content: space-between;
        /* align-items: left; */
    }
    .list ul li>div>span{
        width: 130px;
    }

    .content .sidebar{
        margin-top: 10px;
        margin-right: 20px;
        width: 300px;
        height: 470px;
        float: right;
        border: 1px solid #D6D6D6;  
        border-radius: 8px;
        box-shadow: 2px 2px 8px #C2ABCC;
    }

    .sidebar>h2{
        margin: 10px;
    }
    .sidebar ul{
        margin: 0;
        padding: 0;
    }
    .sidebar ul li{
        list-style: none;
        height: 30px;
        border-bottom: 1px solid #D6D6D6;
        /* background: lightcoral; */
        margin: 5px;
    }
    .sidebar ul li>img{
        width: 70px;
        height: 90px;
        float: left;
    }
    .sidebar ul li:first-of-type{
        height: 100px;
    }
    .sidebar ul li:first-of-type span{
        float: left;
    }
    .sidebar ul li>span{
        margin: 5px;
        width: 170px;
    }
    .sidebar ul li>span:first-of-type{
        font-size: 18px;
        width: 20px;
    }
</style>