<template>
  <div class="wrap" @keydown.enter="login">
    <div class="leftDiv">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546676861887&di=e6113dfe0275abfd94d3adfb5a80a9b2&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0189a55a926c59a80121923185601d.gif">
    </div>
    <div class="rightDiv">
        <div class="login">
          <h1 style="margin-bottom:20px">用户登录</h1>
          <Input type="text" prefix="md-person" v-model="form.username" clearable placeholder="请输入账号" style="width: 300px" @on-blur="userOnOFF = true"/>
          <span class="tip">{{userTip}}</span>
          <Input type="password" prefix="md-lock" v-model="form.password" clearable placeholder="请输入密码" style="width: 300px" @on-blur="psdOnOFF = true"/>
          <span class="tip">{{psdTip}}</span>
          <Input type="text" prefix="md-image" v-model="form.captcha" clearable placeholder="请输入验证码" style="width: 150px" @on-blur="capOnOFF = true"/>
          <img :src="'/api/captcha.jpg?uuid='+form.uuid" style="float:right;width:120px;" @click="Refresh"/>
          <span class="tip">{{capTip}}</span>
          <Button type="info" long @click="login">登录</Button>
        </div>
    </div>
  </div>
</template>

<script>
import ajax from '@/utils/myAxios'
import uuid from 'uuid'
export default {
      data() {
        return {
            form:{
              username: null,
              password: null,
              captcha: null,
              uuid: uuid()
            },
            userOnOFF:false,
            psdOnOFF:false,
            capOnOFF:false,
        }
      },
      methods:{
        async login(){
            if(this.form.username == null||this.form.username == ''
              ||this.form.password == null||this.form.password == ''
              ||this.form.captcha == null||this.form.captcha == ''){
                  this.userOnOFF = true;
                  this.psdOnOFF = true;
                  this.capOnOFF = true;
            }else{
                const data = await ajax
                .post('/sys/login',this.form)
                .then(res => {
                    if(res.data.code != 0){
                      this.info(res.data.msg);
                      this.Refresh()
                    }else{
                        this.$router.push({name: 'main'})
                    }
                })
                .catch(err => {
                    this.info('出错了 err：'+ err);
                })  
            }        
        },
        Refresh(){
            this.form.uuid = uuid()
        },
        info(val){
            this.$Message.info(val);
        }
      },
      computed:{
          userTip(){
            if(this.userOnOFF){
              if(this.form.username == null||this.form.username == ''){
                return '用户名必须'
              }else{
                this.userOnOFF = false
              }
            }             
          },
          psdTip(){
            if(this.psdOnOFF){
              if(this.form.password == null||this.form.password == ''){
                return '密码必须'
              }else{
                this.psdOnOFF = false
              }
            }             
          },
          capTip(){
            if(this.capOnOFF){
              if(this.form.captcha == null||this.form.captcha == ''){
                return '验证码必须'
              }else{
                this.capOnOFF = false
              }
            }             
          }
      }
}
</script>

<style>
    .wrap .leftDiv{
      width: 70%;
      height: inherit;
      float: left;
    }
    .leftDiv img{
      width: 1430PX;
      height: 980px;
    }
     .wrap .rightDiv{
        min-width: 370px;
        width: 25%;
        height: 980px;
        float: right;
        background: white;
     }
     .rightDiv .login{
        width: 300px;
        height: 350px;
        margin: 200px auto;
     }
     .rightDiv .tip{
       display: block;
       height: 22px;
       line-height: 22px;
       color: red;
     }
</style>