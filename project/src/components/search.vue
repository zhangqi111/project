<template>
  <div class="search">
  	<p class="menu_seh">
  		<input type="text" class="txt"/>
  		<input type="button" class="btn" value="搜索"/>
  	</p>
  	<div class="ui cards">
	  <div class="card" v-for="(item,index) in items" :id="item.id" @click="getId(index)" :flag="flag">
	    <div class="content">
	      <img class="right floated mini ui image" :src="item.albums">
	      <div class="header menu_name">{{item.title}}</div>
	      <div class="meta tl gray">功效：{{item.tags}}</div>
	      <div class="description tl gray">准备工作：{{item.burden}}</div>
	    </div>
	    <div v-if="item.flag">
		    <p class="biaoti">做法步䠫:</p>
		    <div v-for="i in item.steps">
		    	<img :src="i.img"/>
		    	<p>{{i.step}}</p>
		    </div>
	    </div>
	  </div>
	</div>
  </div>
</template>

<script>
var m = null;
export default {
  name: 'search',
  data () {
    return {
      items:m,
      flag:false
    }
  },
  mounted(){
  	var _this = this;
  	if(location.href.indexOf("?") > -1){
  		var name = location.href.split("=")[1];
  		name = decodeURIComponent(name)
  		$(".txt").val(name);
  		getBuZou();
  	}else{
  		getBuZou();
  	}
  	function getBuZou(){
	  	$(".btn").click(function(){
	  		var name = $(".txt").val();
	  		var menuName = encodeURIComponent(name)
	  		var url = "http://apis.juhe.cn/cook/query.php?menu=" + menuName + "&dtype=&pn=&rn=&albums=&key=89ed2ade196e40cc58167a3e41d4b2c5";
				$.ajax({
					type:"GET",
					async:true,
					url:url,
					dataType:"jsonp",
					beforeSend:function(){
						//$(".cards").html("");
						var str = `
							<div class="none" style="position: absolute;width:100%;height:100%;left:0;top:1.8rem;background:#fff;">
								<img src="../../static/lazy.gif" style="position:absolute;width:3rem;height:3rem;left:50%;top:40%;transform:translateX(-50%) translateY(-50%)"/>
							</div>
						`;
						$(".cards").append(str);
					},
					success:function(data){
						$(".none").css("display","none")
						var arr = data.result.data;
						for(var i = 0;i < arr.length;i ++){
							arr[i].flag=false;
						}
						_this.items = arr;
					}
				})
	
	  	})
  	}
  },
  methods:{
  	getId: function(index){
		var id = index;
		if(this.items[index].flag){
			this.items[index].flag = false;
		}else{
			this.items[index].flag = true;
		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu_seh{height:1rem;background:#d9d9d7;display: flex;align-items: center;padding:0rem 0.3rem;position: fixed;top:0.8rem;z-index:100;}
.txt{text-indent:10px;width:4.5rem;height:0.6rem;border:1px solid #c1c0be;border-right: none;}
.btn{width:1.5rem;height:0.6rem;border:1px solid #c1c0be;background: #fb7f37;border-left: none;color: #fff;}
.menu_name{height:0.6rem;font-size:0.3rem!important;color:orange!important;line-height: 0.6rem!important;text-align: left;overflow: hidden;}
.ui.cards{margin-top:1.2rem!important;margin-bottom: 1.2rem!important;}
.card{margin:5px auto!important;}
.gray{color:#666!important;}
.biaoti{font-size:0.4rem;text-align: left;font-weight: 600;color:#666;}
.none{position: absolute;width:1rem;height:1rem;left:50%;top:50%;transform:translateX(-50%) translateY(-50%);}
.none img{width:100%;height:100%;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
p{margin:0;}
li {
  display: block;
  margin: 0 10px;
  text-align: left;
  padding:0.1rem;
}

a {
  color: #42b983;
}
.tl{
	text-align: left;
}
</style>
