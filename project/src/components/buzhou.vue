<template>
	<div class="box">
		<!--<p class="title"><a class="ui teal tag label"></a></p>-->
		<div class="uicolumn grid">
		  <div class="column">
		    <div class="ui raised segment"><a class="ui red ribbon label">{{items}}</a></div>
		  </div>
		</div>
		
		<div class="ui items">
		  <div class="item" v-for="item in steps">
		    <div class="image">
		      <img :src="item.img">
		    </div>
		    <div class="content">
		      <div class="extra">{{item.step}}</div>
		    </div>
		  </div>
  		</div>
<back></back>
	</div>
</template>

<script>
	import back from './back'
	export default {
		name:'buzhou',
		data(){
			return {
				items : null,
				steps : null
			}
		},
		mounted(){
			var buzhous = location.href.split("=")[1];
			var newData = localStorage.getItem("data");
			var data = JSON.parse(newData);
			var items = data.result.data;
			console.log(items)
			var newItems = items[buzhous].title;
			this.items = newItems;
			var steps = items[buzhous].steps;
			this.steps = steps;
		},
		components:{
			back
		}
	}
</script>

<style scoped>
	.box{margin-bottom:1.2rem;}
	.ribbon{font-size: 0.3rem!important;}
	.ui.segment, .ui.segments .segment{font-size: 0.3rem; text-align: center;}
	.segment{text-align: center!important;}
	.extra{font-size: 0.25rem!important;margin-top:0!important;line-height: 0.4rem;color:#666!important;}
</style>