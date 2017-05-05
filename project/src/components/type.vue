<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <ul>
    	
  	</ul>
  </div>
</template>

<script>
import jquery from "../assets/js/jquery"
export default {
  name: 'type',
  data () {
    return {
      msg: '食谱分类',
      
    }
  },
  created:()=>{
  	$.ajax({ 
					type:"GET", 
					url:"../../static/music.json", 
					dataType:"json", 
					async:true,
					success:function(data){ 
						//console.log(data)
						var item =data.result;
						console.log(item.length)
						for(var i=0;i<item.length;i++){
							//console.log(item[i].name)
							//console.log(item[i].parentId)
							var url = "#/detailist?id="+ item[i].parentId;
							$('<li>' + '<a href=' + url + '>'+item[i].name+ '</a>' + '</li>').appendTo("ul") 
							//$("ul").html('<li>' +item[i].name+ '</li>')
						}
					} 
			}); 	
  }
}

</script>


<style>
*{
	margin: 0;
	padding: 0;
}
body{
	background-color: #fff8f0;
}

.hello p{
	color: #ccc;
	text-align: center;
	margin-bottom:0!important;
	padding: 0.1rem;
	font-size:0.25rem;
	color:#666;
	font-weight: 600;
}
.hello ul{
	list-style: none;
	width: 100%;
}
.hello ul li{
	width: 35%!important;
	float: left;
	border: 1px solid #ccc;
	text-align: center;
	height:0.5rem;
	padding:0.1rem;
}
.hello ul li:nth-child(odd){
	margin: 2% 5% 2% 10%;
}
.hello ul li:nth-child(even){
	margin: 2% 10% 2% 5%;
}
.hello ul li a{
	color: #75716d;
	text-decoration: none;
	
}
/*#box{
	border-top:3px solid #ccc;
	margin: 0px auto;
	width: 330px;
	margin-top: 20px;
}*/
</style>
