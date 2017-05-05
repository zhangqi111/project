<template>
	<div id="box">
		<ul>
			<li v-for="(item,index) in menudata" @click="gotoList(index)">
				<a>{{item.name}}</a>
				<span> </span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'details',
		data () {
			return {
				menudata:null
			}
		},
		mounted(){
			var that = this;
			var id = location.href.split("=")[1];
			var foods_product = null;
			$.ajax({ 
				type:"GET", 
				url:"../../static/music.json", 
				dataType:"json", 
				async:true,
				success:function(data){ 
					var item =data.result;
					for(var i=0;i<item.length;i++){
						if(item[i].parentId == id){
							//console.log(item[i].list)
							that.menudata = item[i].list;
							//console.log(foods_product)
						}
						//$('<li>' + item[i].list[i].name + '</li>').appendTo("ul") 
						//console.log(item[i].list[i].name)
					}
					//console.log(foods_product)
//					for(var j = 0;j <= foods_product.length;j++){
//						//console.log(foods_product[j].name)						
//						$('<li>'+'<a href="#/list">' + foods_product[j].name+ '</a>' + '</li>').appendTo("ul") 
//					}
				} 
			}); 
		},
		methods:{
			gotoList:function(index){
				var id = this.menudata[index].id;
				location.href="#/list?id=" + id;
			}
		}
	}
	
	
</script>

<style scoped>
#box{margin-bottom: 1.2rem!important;}
ul li{
	list-style: none;
	width: 100%;
	height: 0.5rem;
	line-height: 0.5rem;
	border-bottom: 1px solid #ccc;
	margin-top: 30px;
	padding:0 0.2rem;
}
ul li a{
	text-decoration: none;
	color: #666;
	font-weight: 600;
	float: left;
	font-size:0.3rem;
}
ul li span {
	
	background-image:url(../assets/img/span.png);
	float: right;
	width: 11px;
	height: 15px;
	margin-top: 7px;
}
</style>
	
	
