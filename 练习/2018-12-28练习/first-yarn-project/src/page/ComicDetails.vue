<template>
    <div>
        <div class="wrap">
            <div class="leftDiv">
                <div class="header">
                    <div>
                        <img :src="mySrc">
                        <div>
                            <h1>{{myTitle}}</h1>
                            <p class="Other">
                                <span>作者：奇光影业</span>
                                <span>状态：连载中</span>
                                <span> 类别：少年</span>
                                <span>类型：爱情 | 治...</span>
                                <span>地区：国产</span>
                                <span>字母：b</span>
                                <span>时间：2018-02-06</span>
                                <span>最新：遭遇天花</span>
                                <span>人气：15235℃</span>
                                <span>点击：13337</span>
                                <span>订阅：42</span>
                                <span>吐槽：0</span>
                            </p> 
                            <div class="rate">
                                <span>请您评分：</span>
                                <el-rate v-model="value1"></el-rate>
                                <span>(1231人已评)</span>
                            </div>  
                            <p class="introduce">
                                白娘子和许仙的故事里，许仙终于不再是一介平凡人类，而是带着一群颜正条顺的草药娘和病魔战斗的转世药王！每天美女环绕，家中的娇妻白娘子又会是如何反应？从此千年姻缘再续，千年又岂止只等一回【授权】
                            </p>                      
                        </div>
                    </div>
                    <div class="btn">
                        <el-button type="danger" icon="el-icon-view" plain @click="startRaed">开始阅读</el-button>
                        <el-button type="warning" icon="el-icon-star-off" plain @click="more">订阅收藏</el-button>
                    </div>
                </div>
                <div class="tip">
                    敬告：《{{myTitle}}》 漫画仅供试看，若喜欢，请支持购买正版。如作者不希望该漫画出现在本站，请联系我们删除
                </div>
                <div class="chapterList">
                    <h1><i class="el-icon-document"></i>章节列表</h1>
                    <ul>
                        <li v-for="item in 60" :key="item"><i class="el-icon-document"></i>第{{item}}章</li>
                    </ul>
                </div>
            </div>
            <div class="rightDiv">
                <div class="Notice">  
                    <div>
                        <img src="../img/avatar.png"/>
                        <span style="font-size:18px">奇光影业</span>
                        <span>作品：1部</span>
                    </div>
                    <p><i class="el-icon-edit-outline"></i>作者公告</p>
                    <ul>
                        <li>暂无公告</li>
                        <li v-for="item in 3" :key="item"></li>
                    </ul>
                </div>
                <div class="Recommend">
                    <h1>同类推荐<i class="el-icon-circle-plus" title="更多" @click="more"></i></h1>
                    <ul>
                        <li v-for="item in comicList" :key="item.id">
                            <img :src="item.src"/>
                            <div>
                                <h3>{{item.title}}</h3>
                                <p>作者：xxx</p>
                                <p>简介：记录一对小情侣的小小日常。感恩生活中有猫，有你…</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:'',                
                value1:null,
                comicList:[{src:require('@/img/110.jpg'),id:"110",title:'通灵妃'},{src:require('@/img/111.jpg'),id:"111",title:'英雄？我早就不当了'},{src:require('@/img/112.jpg'),id:"112",title:'妹子与科学'}]
            }
        },
        created() {
            this.id = this.$route.params.id
        },
        computed:{
            mySrc(){
                return require('@/img/'+this.id+'.jpg')
            },
            myTitle(){
                let arr = this.data.filter(item => {
                    return item.id == this.id
                })
                return arr[0].title
            }
        },
        methods:{
            more(){
                alert("功能尚未开发，请耐心等待 (￣▽￣)／")
            },
            startRaed(){
                this.$router.push({path:('/comicContent/id/'+this.id)})
            }
        }
    }
</script>

<style scoped>
    .wrap{
        width: 1200px;
        /* height: 1000px; */
        margin: 20px auto;
    }
    .wrap .leftDiv{
        width: 880px;
        float: left;
    }
    .leftDiv .header{
        width: inherit;
        height: 390px;
        border: 1px solid #D6D6D6;
    }
    .header>div:first-of-type{
        width: 830px;
        height: 280px;
        margin: 20px auto;
    }
    .header>div:first-of-type img{
        width: 205px;
        height: 280px;
        float: left;
    }
    .header>div:first-of-type>div{
        width: 600px;
        height: 280px;
        float: right;
    }
    .header .rate{
        margin: 10px 0;
        height: 32px;
        display: flex;
        border-bottom: 1px #D6D6D6 dashed;
    }
    .header .Other{
        height: 120px;
        width: inherit;
        display: flex;
        flex-wrap: wrap;
        border-bottom: 1px #D6D6D6 dashed;
    }
    .header p{
        margin-top: 15px;
    }
    .Other span{
        font-size: 14px;
        width: 130px;
        height: 25px;
    }
    .header .btn{
        text-align: center
    }

    .leftDiv .tip{
        height: 40px;
        background: #FFF0F0;
        border: 1px solid #D6D6D6;
        margin-top: 10px;
        line-height: 40px;
        text-indent: 2em;
    }
    .leftDiv .chapterList{
        margin: 10px auto;
        border: 1px solid #D6D6D6;
    }
    .chapterList h1{
        text-indent: 10px;;
        margin: 10px;
    }
    .chapterList ul{
        border-top:1px solid #D6D6D6;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .chapterList ul li{
        list-style: none;
        font-size: 16px;
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-indent: 1em;
        border-bottom: 1px solid #D6D6D6;
    }

    .wrap .rightDiv{
        width: 300px;
        float: right;
    }
    .rightDiv .Notice{
        height: 315px;
        width: inherit;
        border: 1px solid #D6D6D6;
        box-shadow: 2px 2px 8px #C2ABCC;
    }
    .Notice>div{
        width: 250px;
        height: 100px;
        margin: 20px 20px;
    }
    .Notice img{
        width: 100px;
        height: 100px;
        float:left;
    }
    .Notice>div span{
        float:left;
        margin-left: 10px;
        width: 100px;
    }
    .Notice>p{
        margin: 20px;
        margin-bottom: 0;
        font-size: 18px;
        color:#FF6935;
    }
    .Notice ul{
        margin: 20px;
        margin-top: 0;
        padding: 0;
    }
    .Notice ul li{
        list-style: none;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px #D6D6D6 dashed;
        text-indent: 2em;
    }

    .rightDiv .Recommend{
        height: 430px;
        width: inherit;
        margin-top: 20px;
        border: 1px solid #D6D6D6;
    }
    .Recommend h1{
        margin: 10px;
        text-indent: 10px;       
    }
    .Recommend h1 i{
        float:right;
        margin: 5px;
    }
    .Recommend ul{
        border-top: 1px solid #D6D6D6;
    }
    .Recommend ul li{
        list-style: none;
        height: 100px;
        margin: 20px;
    }
    .Recommend ul li>img{
        width: 72px;
        height: 96px;
        float: left;
    }
    .Recommend ul li>div{
        float: right;
        width: 170px;
    }
    .Recommend ul li>div p{
        margin-top: 5px;
    }
</style>