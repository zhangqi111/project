<template>
  <div class="register">
  	<p class="res-img"><img src="../assets/register/food.png"/></p>
  	<div class="regInfor">
	  	<div class="reg-infor">
	  		<p class="bd-white">
	  			<input type="text" name="" id="" value="" class="txt" placeholder="手机号/邮箱"/>
	  		</p>
	  		<p class="bd-white">
	  			<input type="password" class="pwd" id="" value="" placeholder="密码"/>
	  		</p>
	  		<p class="bd-white bd0">
	  			<input type="password" class="pwd" id="pwd1" value="" placeholder="确认密码"/>
	  		</p>
	  	</div>
  		<p class="btn">
  			<input type="button" id="reg_btn" value="注册" class="reg"/>
  		</p>
  		<p class="links">
	  		<Link to="login" class="fl">登录</Link>
  		</p>
  	</div>
  	
  </div>  
</template>

<script>
import jQuery from "../assets/js/jquery";
window.jQuery = window.$ = $;
export default {
  name: 'register',
  data () {
    return {
      
    }
  },
  mounted:()=>{
  	$("#reg_btn").click(function(){
  		var tel = $(".txt").val();
  		var re = /^[1][3,4,5,7,8][0-9]{9}$/;
  		var pwd = $(".pwd").val();
  		var pwd1 = $("#pwd1").val();
  		var rePwd = /^\w{6,16}$/;
  		if(!re.test(tel)){
  			alert("请填写正确的手机号");
  			return;
  		}else if(!rePwd.test(pwd)){
  			alert("密码格式不对");
  			return;
  		}else if(pwd != pwd1){
  			alert("两次密码输入不一致");
  		}else{
  			alert("注册成功")
  		}
  	})
  	
  	
  }
}
</script>
<style scoped>
.register{background:#e59f4a;width:100vw;height:92.7vh;padding:0;margin:0;position:relative;left:0;top:0;}
.res-img{position:absolute;margin-top:50%;margin-left:50%;transform:translateX(-50%) translateY(-70%);}
.regInfor{width:5rem;border-radius:5px;top:50%;left:50%;transform:translateX(-50%) translateY(-30%);position: absolute;}
.reg-infor{border:2px solid #fff;width:5rem;height:2.46rem;border-radius:5px;}
.bd-white{width:100%;border-bottom:2px solid #fff;height:0.8rem;position: relative;background: #f6c78f;}
.bd0{border-bottom: 0;}
input{border: 0;background: none;color: #fff;}
.txt,.pwd,.reg{width:100%;height:100%;position: absolute;left: 0;top: 0;font-size:0.3rem;text-indent: 10px;}
.btn{width:100%;height:0.7rem;background: #f6c78f;margin-top:0.2rem;position: relative;border-radius: 8px;}
.fl{float: left;}
.fr{float: right;}
.links{height:0.8rem;line-height: 0.8rem;}
.links a{font-size:0.3rem;color:#fff;}
a{text-decoration: none;}
p{margin:0;padding:0;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

</style>
