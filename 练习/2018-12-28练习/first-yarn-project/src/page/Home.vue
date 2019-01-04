<template>
  <div class="wrap">  
    <div class="leftDiv">
        <div class="banner">
            <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="item in imgList" :key="item.id"> 
                <router-link :to="'ComicDetails/id/'+item.id"><img :src='item.src'/></router-link>   
            </el-carousel-item>
            </el-carousel>
        </div>
        <div class="update">
            <h2>最近更新<i class="el-icon-refresh" title="换一批" @click="refresh"></i></h2>
            <ul>
                <li v-for="item in updateList" :key="item.id" @click="selectComic(item.id)">
                    <img :src = item.src>
                    <span>{{item.title}}</span>
                    <p>作者：xxx</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="rightDiv">
        <div class="sidebar" style="border: 1px solid #D6D6D6">
            <h2><i class="el-icon-search"></i>点击排行</h2>
            <ul>
                <li v-for="(item,index) in data" :key="item.title" v-show="index<10">
                    <span>{{index+1}}</span>
                    <img v-if="index == 0" :src="item.src"/>
                    <span>{{item.title}}</span>
                    <span v-if="index == 0">作者：xxx</span>
                    <span v-if="index == 0">最新：第三话</span>
                </li>
            </ul>
        </div>
        <div class="Notice">
            <h2><i class="el-icon-time"></i>更新预告</h2>
            <ul>
                <li v-for="(item,index) in imgList" :key="item.id">
                    <span style="color:lightskyblue">【{{index | getDay}}】</span>
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="content">

    </div>
    
  </div>
</template>

<script>
    export default {
        data(){
            return{
                imgList:null,
                updateList:null,
            }
        },
        methods:{
            selectComic(id){
                 this.$router.push({path:('ComicDetails/id/'+id)})
            },
            refresh(){
                let num = parseInt(10*Math.random());
                this.updateList = this.data.slice(num,num+5);
            }
            
        },
        mounted() {
            let num = parseInt(10*Math.random());
            this.imgList = this.data.slice(num,num+6);
            this.refresh()
        },
        filters:{
            getDay:(val) => {
                let arr = ['星期一','星期二','星期三','星期四','星期五','星期六']
                return arr[val];
            }
        }

    };
</script>

<style scoped>
    .wrap{
        margin: 10px auto;
        height: 500px;
        width: 1200px;
    }
    .wrap .leftDiv{
        float: left;
        width: 800px;
    }
    .wrap .rightDiv{
        float: right;
        width: 300px;
    }
    .wrap .banner{
        width: inherit;
    }
    .el-carousel{
        margin: 20px auto;
    }
    .el-carousel img{
        width: 400px;
        height: 500px;
    }
    .leftDiv .update{
        margin: 10px 0;
        width: inherit;
        height: 290px;
        -moz-user-select:none;/*火狐*/
        -webkit-user-select:none;/*webkit浏览器*/
        -ms-user-select:none;/*IE10*/
        -khtml-user-select:none;/*早期浏览器*/
        user-select:none;  
    }
    .update h2{
        margin: 10px;
    }
    h2 .el-icon-refresh{
        float: right;
        margin-top:5px; 
    }
    h2 .el-icon-refresh:hover{
        cursor: pointer;
    }
    .update ul{
        margin: 10px;
        padding: 0;
        display: flex;
        justify-content: space-between;
    }
    .update ul li{
        height: 235px;
        width: 135px;
        list-style: none;
        position: relative;
    }
    .update ul li img{
        width: inherit;
        height: 178px;
    }
    .update ul li span{
        text-indent: 1em;
        position: absolute;
        width: inherit;
        height: 24px;
        line-height: 24px;
        background: #34393f;
        color: #fff;
        opacity: .7;
        top:154px;
    }


    .rightDiv .sidebar{
        margin-top: 10px;
        width: 300px;
        height: 480px; 
        border-radius: 8px;
        border: 1px solid #D6D6D6;
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

    .rightDiv .Notice{
        width: inherit;
        height: 270px;;
        border: 1px solid #D6D6D6;
        margin-top: 30px;
    }

    .Notice h2{
        margin: 10px;
    }
    .Notice ul{
        border-top: 1px solid #D6D6D6;
    }
    .Notice ul li{
        list-style: none;
        height: 35px;
        line-height: 35px;
        text-indent: 10px;
        border-bottom: 1px #D6D6D6 dashed;
    }
    .Notice ul li span{
        margin-right: 10px;
    }
</style>