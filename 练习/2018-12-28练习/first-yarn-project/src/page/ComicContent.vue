<template>
    <div class="wrap">
        <div class="content">
            <h1>{{myTitle}}</h1>
            <img src="../img/2.gif"/>
            <div class="footer">
                <p @click="next">
                    <span><Icon class="Icon" type="ios-heart" />收藏</span>
                    <span><Icon class="Icon" type="md-thumbs-up" />投月票</span>
                    <span><Icon class="Icon" type="logo-yen" />打赏</span>
                </p>  
                <div>
                    <span @click="next">点击进入下一话<Icon type="md-arrow-forward" /></span>
                </div>             
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id:null,
            }
        },
        created() {
            this.id = this.$route.params.id
        },
        methods:{
            next(){
                alert("功能尚未开发，请耐心等待 (￣▽￣)／")
            }
        },
        computed: {
            myTitle(){
                let arr = this.data.filter(item => {
                    return item.id == this.id
                })
                return arr[0].title
            }
        }
    }
</script>

<style scoped>
    .wrap{
        background: #333333;
        margin: 0;
        position: relative;
    }
    .wrap .content{
        width: 1200px;
        margin: 0 auto;
        position: relative;
    }
    .content img{
        position: relative;
        top: 10px;
        left: calc(50% - 300px);
    }
    .content h1{
        padding-top: 20px;
        color:#FE8929;
        text-align: center;
    }
    .content .footer{
        margin: 30px auto 0;
        height: 300px;
    }
    .footer p{
        text-align: center;
        margin-top: 70px;
        height: 90px;
    }
    .footer span{
        margin: 50px;
        color: #FE8929;
        font-size: 16px;
        position: relative;
    }
    .footer .Icon{
        font-size: 40px;
        position: absolute;
        top:-40px;
        left: calc(50% - 20px);
    }
    .footer p>span:hover{
        cursor: pointer;
    }
    .footer div{
        margin-top:20px;
        text-align: center;
    }
    .footer div>span:hover{
        cursor: pointer;
    }
</style>