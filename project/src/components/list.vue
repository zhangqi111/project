<template>
	<div class="list">
		<ul>
			<li v-for = "item in menulist">
				<h3>{{item.title}}</h3>
				<div>
					<p style="text-align: left;font-size: 0.3rem;color:#888;font-weight: 600;">菜品介绍:</p>
					<p>{{item.imtro}}</p>
				</div>
				<div>
					<p style="text-align: left;font-size: 0.3rem;color:#888;font-weight: 600;">步䠫:</p>
					<div v-for="m in item.steps">
						<img :src="m.img" alt="" />
						<p>{{m.step}}</p>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'details',
		data () {
			return {
				menulist:null
			}
		},
		mounted(){
			var that = this;
			var cid = location.href.split("=")[1];
			$.ajax({ 
				type:"GET", 
				url:"http://apis.juhe.cn/cook/index?cid=" + cid + "&dtype=&pn=&rn=&format=&key=bcdf28dc8087dbfe470af82dc6d96263", 
				dataType:"jsonp", 
				async:true,
				success:function(data){ 
					//console.log(data.result.data)
					var item =data.result.data;
					that.menulist=item;
//					for(var i = 0; i <item.length;i++){
//						if(item[i].parentId == cid){
//							
//						}
//					}
					
//					for(var i=0;i<item.length;i++){
//						//console.log(item[i])
//						//$('<li><h3>'+item[i].title+ '</h3><p>' + item[i].burden + '</p><p>' + item[i].imtro + '</p><img src=' + item[i].albums + '></li>').appendTo("ul")
//						that.menulist=item[i].list
//						console.log(item[i])
//					}
					console.log(item)
				} 
			});
		}
	}
</script>	
<style scoped>
ul,li{list-style: none;}
.list{margin-bottom: 1.2rem!important;}
h3{font-size:20px;margin-bottom:0px!important;height:1rem;line-height: 1rem;color:orange;}
p{font-size:15px;}
li{height: auto!important;width: 90%!important;margin: 0 auto;}
</style>