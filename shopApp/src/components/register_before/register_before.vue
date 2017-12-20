<template>
  <div class="before_container">
    <div class="before_head">
      <i></i>
      <input type="text" placeholder="请输入手机号码" name="phone" maxlength="11" v-model="phoneNumber">
      <div class="hr"></div>
    </div>
    <div class="btn">
      <!--模拟a调到注册-->
      <span @click="rigister" :class="{right_phone_number:rightPhoneNumber}"><router-link to="javascript:;">下一步</router-link></span>
    </div>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </div>
</template>
<script>
  import alertTip from  'common/alertTip'
  export default {
    data() {
      return {
        phoneNumber: null,
        showAlert: false
      }
    },
    //计算属性查看手机号验证
    computed: {
      //判断手机号码
      rightPhoneNumber: function () {
        return /^1\d{10}$/gi.test(this.phoneNumber)
      }
    },
    methods: {
      rigister() {
        //获取手机验证码是否争取
        if(!this.rightPhoneNumber){
          this.showAlert = true;
          this.alertText = '手机号码不正确';
          return
        }else{
          this.$router.push('/register')
        }
      },
      //关闭提示框
      closeTip(){
        this.showAlert = false;
      }
    },
    components: {
      alertTip
    }
  }
</script>
<style scoped lang="less">
  @import "~common/css/public";

  @rem: 750/16rem;
  .before_container {
    width: 100%;
    .before_head {
      width: 100%;
      height: 150/@rem;
      position: relative;
      i {
        display: inline-block;
        position: absolute;
        top: 40/@rem;
        left: 45/@rem;
        width: 45/@rem;
        height: 45/@rem;
        background-image: url("./phone.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      input {
        width: 520/@rem;
        height: 100/@rem;
        padding-left: 30/@rem;
        margin-top: 18/@rem;
        margin-left: 120/@rem;
        border-radius: 20/@rem;
        font-size: 31/@rem;
        background: #FFFFFF;
        border: 1px solid salmon;
      }
      .hr {
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: rgba(192, 192, 192, .4);
      }
    }
    .btn {
      width: 100%;
      height: 400/@rem;
      text-align: center;
      line-height: 400/@rem;
      span {
        display: inline-block;
        text-align: center;
        line-height: 100/@rem;
        background: rgba(192, 192, 192, .4);
        width: 400/@rem;
        height: 100/@rem;
        border: 1px solid gba(192, 192, 192, .8);
        border-radius: 35/@rem;
        color: #FFFFFF;
        a {
          color: #FFFFFF;
          font-size: 30/@rem;
        }
      }
      .right_phone_number {
        background:green;
      }
    }
  }
</style>
