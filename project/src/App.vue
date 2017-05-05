<template>
	
  <div id="app">
  	<div class="header1">
		<a class="fl h3_a" href="#/">美食汇</a>
		<i class="search icon fr white"></i>
	</div>
    <router-view></router-view>
    <footer>
	    <div class="ui orange four item inverted menu footer">
		  <a class="item" href="#/">首页</a>
		  <a class="item" href="#/type">分类</a>
		  <a class="item" href="#/search">菜品</a>
		  <a class="item" href="#/login">登录</a>
		</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted:()=>{
  	$(".white").click(function(){
  		location.href = "#/search";
  	})
  }
}
</script>

<style>
@import url(./assets/css/semantic.css);
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{padding:0!important;margin:0!important;}
body{padding:0.8rem 0 1rem 0!important;}
html{font-size:15.625vw;}
.h3_a{margin:0;margin-left:0.2rem;font-size:0.3rem;height:0.8rem;line-height: 0.8rem;color:#fff;}
.header1{z-index:1000;height:0.8rem;border-bottom:2px solid #fff;vertical-align: middle;background: #e59f4a;display: flex;align-items: center;position: fixed;top:0;left:0;width:100vw;}
.fl{float: left;}
.fr{float: right;}
.white{color:#fff;font-size:0.3rem;position: absolute;margin:0!important;right:0.2rem;}
a:link{color:#fff;}
a:visited{color:#fff;}
a:hover{color: #fff;}
a:active{color:#fff;}
.footer{height:1rem!important;border-radius: 0px!important;min-height: 1rem!important;position: fixed;bottom:0;}
.footer a{font-size:0.34rem;height:1rem!important;padding:0!important;}
</style>
