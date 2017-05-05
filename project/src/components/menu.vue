<template>
	<div class="fat">
  	<div class="menu">
    	<div><p class="titlel"></p></div>
		<back></back>
		<div class="ui card" v-for="(item,index) in items" @click="goods(index)" :item="item">
		  <div class="image">
		  	<img :src="item.albums"/>
		  </div>
		  <div class="extra content">
		    <a> {{item.title}} </a>
		  </div>
		</div>
    </div>
  </div>
</template>
<script>
import back from "./back"
export default {
  name: 'menu',
  components:{
  	back
  },
  data () {
    return {
      items : null
    }
  },
  methods:{
  	goods: function(index){
//		console.log(index)
//		console.log(this.items[index].steps)
			location.href="#/buzhou?name=" + index;
  	}
  	
  },
  mounted(){
  	var that = this;
  	
  	var menuName = location.href.split("=")[1];
  	var url = "http://apis.juhe.cn/cook/query.php?menu=" + menuName + "&dtype=&pn=&rn=&albums=&key=89ed2ade196e40cc58167a3e41d4b2c5";
		$.ajax({
			type:"GET",
			async:true,
			url:url,
			dataType:"jsonp",
			beforeSend:function(){
				var str = `
					<img src = "../../static/lazy.gif"/ class = "none" style="width:100%;">
				`;
				
				$(".menu").append(str);
				
			},
			success:function(data){
				$(".none").css({"display":"none"});
				$(".goTop").css({"display":"block"});
				$(".pLeft").css({"display":"block"});
				console.log(data)
				var newData = JSON.stringify(data)
				localStorage.setItem("data",newData)
				that.items = data.result.data;
				
			}
		})
		$(".titlel").html(decodeURIComponent(menuName));
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

a {
  color: #42b983;
}
.ui.card, .ui.cards>.card{
	width:50%;
	float: left;
	
}
.fat{text-align: center;
	width: 100%;
	overflow: hidden;
	
}
.content{height:45px; display: flex; align-items: center; justify-content: center;}


.none{width: 100%!important;}
.titlel{width: 100%;height:40px; line-height: 40px; font-size: 0.3rem;
color: orange;}
</style>
