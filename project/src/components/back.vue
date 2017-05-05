<template>
	<div>
		<p class="pLeft"><i class="icon arrow left" @click="goback"></i></p>
		<button @click="goTop" class="goTop"><i class="arrow up icon"></i></button>
	</div>
	
</template>

<script>
	export default{
		name:"back",
		methods:{
			goTop: function(){
		  		$("html body").animate({"scrollTop":0});
		  	},
		  	goback: function(){
		  		history.back();
		  	}
		}
	}
	
</script>

<style>
.goTop{width: 30px;background: none; height: 30px; float: right;margin: 20px 0; font-size: 18px; border: none; position: fixed;right: 0; bottom:14.5%; z-index: 10;
background: #fff; display: none; border-radius: 50%; background: rgba(255,255,255,0.5);}
.pLeft{display: block;position: fixed; display: none; left: 0; bottom:15%; z-index: 10; font-size: 18px;
background: #fff; border-radius: 50%; height: 0.5rem; width: 0.5rem; background: rgba(255,255,255,0.5);}
.pLeft i{margin: 0.06rem auto;}
</style>