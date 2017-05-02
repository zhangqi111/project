<template>
	
  <div id="app">
  	<div class="header">
			<h3>美食汇</h3>
			
		</div>
    <router-view></router-view>
  </div>
</template>

<script>
//import semantic from "./assets/css/semantic.css";
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{padding:0!important;margin:0!important;}
html{font-size:15.625vw;}
h3{margin:0;font-size:0.3rem;height:0.8rem;line-height: 0.8rem;color:#fff;}
.header{height:0.8rem;border-bottom:2px solid #fff;vertical-align: middle;background: #e59f4a;}
</style>
