<template>
	<!--轮播图部分--------------------------------------------------------------->
	<div class="index">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide"><img src="../assets/1.jpg"/></div>
		    <div class="swiper-slide"><img src="../assets/2.jpg"/></div>
		    <div class="swiper-slide"><img src="../assets/3.jpg"/></div>
		    <div class="swiper-slide"><img src="../assets/4.jpg"/></div>
		  </div>
		   <div class="swiper-pagination"></div>
		</div>
		<!--时令热搜部分---------------------------------------------------------->
		<div class="ui orange labels">
			<div><p class="hotSea">时令热搜</p></div>
		  <a class="ui label">粽子</a>
		  <a class="ui label">冷面</a>
		  <a class="ui label">凉面</a>
		  <a class="ui label">肉粽子</a>
		  <a class="ui label">绿豆粥</a>
		   <a class="ui label">拍黄瓜</a>
		  <a class="ui label">冷饮</a>
		   <a class="ui label">甜品</a>
		</div>
		<!--本周最热部分---------------------------------------------------------->
		<div><p class="hotSea1">本周最热</p></div>
		<div class="ui three link cards">
		  <div class="card">
		    <div class="image">
		      <img src="../assets/5.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">珍珠元子 </span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/6.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">麻婆豆腐</span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/7.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">蒜香烤翅</span>
		    </div>
		  </div>
		</div>
			<!--本周最热部分---------------------------------------------------------->
		<div><p class="hotSea1">本周最热</p></div>
		<div class="ui three link cards">
		  <div class="card">
		    <div class="image">
		      <img src="../assets/8.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">雪媚娘 </span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/9.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">农家小炒</span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/10.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">玫瑰花果</span>
		    </div>
		  </div>
		</div>
		<!--本周最热部分---------------------------------------------------------->
		<div><p class="hotSea1">冰雪冷饮</p></div>
		<div class="ui three link cards">
		  <div class="card">
		    <div class="image">
		      <img src="../assets/11.png" class="hei">
		    </div>
		    <div class="extra content">
		      <span class="center floated">雪媚娘 </span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/12.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">农家小炒</span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/13.png" class="hei">
		    </div>
		    <div class="extra content">
		      <span class="center floated">玫瑰花果</span>
		    </div>
		  </div>
		</div>
		<!--本周最热部分---------------------------------------------------------->
		<div><p class="hotSea1">甜品王国</p></div>
		<div class="ui three link cards">
		  <div class="card">
		    <div class="image">
		      <img src="../assets/14.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">雪媚娘 </span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/15.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">农家小炒</span>
		    </div>
		  </div>
		  <div class="card">
		    <div class="image">
		     <img src="../assets/16.png">
		    </div>
		    <div class="extra content">
		      <span class="center floated">玫瑰花果</span>
		    </div>
		  </div>
		</div>
	</div>
</template>
	
<script>
//import swiperCss from '../../node_modules/swiper/dist/swiper.min.css';
import jQuery from '../assets/jquery.js';
//import semantic from '../../static/css/semantic.min.css';
import swiper from '../../static/js/swiper.min';
import swiperCss from '../../static/css/swiper.min.css';
window.jQuery = window.$ = $;
export default {
	name: 'index',
	mounted:()=>{
		var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			paginationClickable :true,
		})
		$(".labels a").click(function(){
//			alert($(this).text())
			var name = $(this).text();
			var menuName = encodeURIComponent(name);
			location.href="#/menu?name=" + menuName;
		})
		$(".card").click(function(){
			var name = $(this).find($(".floated")).text();
			location.href = "#/search?name=" + name;
		})
	}
}
</script>

<style>
	html{font-size: 15.625vw;}
	body{font-size: 12px;}
	.index{margin-bottom: 1.2rem!important;}
	.swiper-container{height: 222px;}
	.swiper-slide{width:100%; height: 3.48rem;}
	.swiper-slide img{width: 100%;height: 100%;}
	.hotSea{text-align: left;margin: 10px;height: 40px; line-height: 40px; color: #ccc;}
	.hotSea1{text-align: left;margin: 10px; color: #ccc;}
	.cards{padding: 0 15px;}
	.ui.card>.extra, .ui.cards>.card>.extra{padding:0.3em 1em!important;}
	.ui.cards~.ui.cards{margin-top:0!important ;}
	.ui.cards{margin: 0 -1em!important;}
	.hei{height: 93px!important;}
	.labels a{font-size: 0.25rem!important;border-radius: 5px!important;}
</style>